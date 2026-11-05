// Busca do blog (/search). Sobrescreve themes/hugo-PaperMod/assets/js/fastsearch.js.
//
// O tema concatena este arquivo depois do fuse.basic.min.js (ver head.html do
// PaperMod), então `Fuse` está disponível como global. O índice vem de
// layouts/index.json.
//
// Opções do Fuse ficam aqui (e não em params.fuseOpts do config.toml) porque
// usam pesos por campo, que o config não consegue expressar.

const FUSE_OPTIONS = {
    keys: [
        { name: 'title', weight: 3 },
        { name: 'categories', weight: 2 },
        { name: 'summary', weight: 1.5 },
        { name: 'content', weight: 1 },
    ],
    ignoreLocation: true,   // procura o termo no texto inteiro, não só no começo
    threshold: 0.3,
    minMatchCharLength: 2,
    shouldSort: true,
};

const RESULT_LIMIT = 30;

const sInput = document.getElementById('searchInput');
const resList = document.getElementById('searchResults');
const status = document.getElementById('searchStatus');
const searchBox = document.getElementById('searchbox');

let fuse = null;

const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => fn(...args), delay);
    };
};

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Cria nós de texto com os termos da busca envoltos em <mark>.
// Monta via DOM (nunca innerHTML) para o texto do índice não virar HTML.
const highlight = (text, query) => {
    const fragment = document.createDocumentFragment();
    const terms = query.split(/\s+/).filter((t) => t.length >= 2).map(escapeRegExp);

    if (!text || terms.length === 0) {
        fragment.append(text || '');
        return fragment;
    }

    const pattern = new RegExp(`(${terms.join('|')})`, 'gi');
    text.split(pattern).forEach((part, i) => {
        if (i % 2 === 1) {
            const mark = document.createElement('mark');
            mark.textContent = part;
            fragment.append(mark);
        } else if (part) {
            fragment.append(part);
        }
    });

    return fragment;
};

const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
};

const renderResult = ({ item }, query) => {
    const li = el('li', 'search-result');

    const meta = el('div', 'post-meta-line');
    if (item.categories?.length) {
        meta.append(el('span', 'search-result-category', item.categories[0]));
    }
    if (item.date) {
        meta.append(el('time', '', item.date));
    }

    const title = el('h2', 'search-result-title');
    const link = el('a', 'search-result-link');
    link.href = item.permalink;
    link.append(highlight(item.title, query));
    title.append(link);

    li.append(meta, title);

    if (item.summary) {
        const summary = el('p', 'search-result-summary');
        summary.append(highlight(item.summary, query));
        li.append(summary);
    }

    return li;
};

const setStatus = (text) => {
    status.textContent = text;
};

const syncUrl = (query) => {
    const url = new URL(window.location.href);
    if (query) {
        url.searchParams.set('q', query);
    } else {
        url.searchParams.delete('q');
    }
    window.history.replaceState(null, '', url);
};

const performSearch = () => {
    const query = sInput.value.trim();
    syncUrl(query);
    resList.replaceChildren();

    if (!query) {
        setStatus('');
        return;
    }

    if (!fuse) {
        setStatus('Carregando o índice…');
        return;
    }

    const results = fuse.search(query, { limit: RESULT_LIMIT });

    if (results.length === 0) {
        setStatus(`Nenhum resultado para “${query}”. Tente outro termo.`);
        return;
    }

    const count = results.length === RESULT_LIMIT ? `${RESULT_LIMIT}+` : results.length;
    setStatus(`${count} ${results.length === 1 ? 'resultado' : 'resultados'} para “${query}”`);

    const fragment = document.createDocumentFragment();
    results.forEach((result) => fragment.append(renderResult(result, query)));
    resList.append(fragment);
};

const runQuery = (query) => {
    sInput.value = query;
    performSearch();
    sInput.focus();
};

const initSearch = async () => {
    if (!sInput || !resList) {
        return;
    }

    sInput.disabled = false;

    const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
    sInput.value = initialQuery;
    sInput.focus();

    try {
        const response = await fetch('../index.json');
        if (!response.ok) {
            throw new Error(`Search index load failed: ${response.status}`);
        }
        fuse = new Fuse(await response.json(), FUSE_OPTIONS);
    } catch (error) {
        console.error(error);
        setStatus('Não foi possível carregar a busca. Recarregue a página para tentar de novo.');
        return;
    }

    if (initialQuery) {
        performSearch();
    }
};

window.addEventListener('load', initSearch);

sInput?.addEventListener('input', debounce(performSearch, 150));

const resultLinks = () => Array.from(resList.querySelectorAll('.search-result-link'));

document.addEventListener('keydown', (event) => {
    const { key } = event;
    const active = document.activeElement;
    const typing = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);

    // "/" foca a busca de qualquer lugar da página
    if (key === '/' && !typing) {
        event.preventDefault();
        sInput.focus();
        sInput.select();
        return;
    }

    if (!searchBox?.contains(active)) {
        return;
    }

    if (key === 'Escape') {
        runQuery('');
        return;
    }

    const links = resultLinks();
    if (links.length === 0 || (key !== 'ArrowDown' && key !== 'ArrowUp')) {
        return;
    }

    event.preventDefault();
    const current = links.indexOf(active);

    if (key === 'ArrowDown') {
        links[Math.min(current + 1, links.length - 1)].focus();
    } else if (current <= 0) {
        sInput.focus();
    } else {
        links[current - 1].focus();
    }
});
