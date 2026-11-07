// Página do post (layouts/single.html): progresso de leitura (barra no topo
// e anel do trilho lateral), copiar link e sumário com a seção atual.

(() => {
    const content = document.querySelector('.post-content');
    const article = document.querySelector('.post-single');
    const percent = document.querySelector('.post-rail-percent');
    const toc = document.querySelector('.toc');
    const wide = window.matchMedia('(min-width: 1200px)');

    // ---- Progresso: mede só o texto do post (não comentários/rodapé).
    // Grava em --progress (0..1) na <article>; barra e anel leem via CSS.
    if (content && article) {
        let ticking = false;

        const update = () => {
            const rect = content.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
            article.style.setProperty('--progress', progress.toFixed(4));
            if (percent) {
                percent.textContent = `${Math.round(progress * 100)}%`;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        update();
    }

    // ---- Copiar link
    const copy = document.querySelector('[data-copy-link]');
    if (copy && navigator.clipboard) {
        const status = copy.querySelector('.post-rail-copy-status');
        copy.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(location.href.split('#')[0]);
                status.textContent = 'Link copiado';
                copy.dataset.copied = '';
            } catch {
                status.textContent = 'Não foi possível copiar';
            }
            setTimeout(() => {
                status.textContent = '';
                delete copy.dataset.copied;
            }, 2000);
        });
    } else if (copy) {
        copy.hidden = true;
    }

    if (!toc || !content) {
        return;
    }

    // ---- Sumário: sempre aberto como coluna lateral em telas largas
    const syncOpen = () => {
        if (wide.matches) {
            toc.open = true;
        }
    };
    syncOpen();
    wide.addEventListener('change', syncOpen);

    // no mobile, fecha o sumário ao escolher uma seção
    toc.addEventListener('click', (event) => {
        if (event.target.closest('a') && !wide.matches) {
            toc.open = false;
        }
    });

    // ---- Destaque da seção atual
    const links = new Map(
        Array.from(toc.querySelectorAll('a[href^="#"]')).map((a) => [decodeURIComponent(a.hash.slice(1)), a])
    );
    const headings = Array.from(content.querySelectorAll('h2[id]')).filter((h) => links.has(h.id));

    if (headings.length === 0 || !('IntersectionObserver' in window)) {
        return;
    }

    const setCurrent = (id) => {
        links.forEach((a, key) => {
            if (key === id) {
                a.setAttribute('aria-current', 'true');
            } else {
                a.removeAttribute('aria-current');
            }
        });
    };

    // a seção atual é o último h2 que já passou do topo (com folga de 25% da tela);
    // o observer só avisa quando algum h2 cruza essa faixa, aí recalculamos
    const observer = new IntersectionObserver(() => {
        const passed = headings.filter((h) => h.getBoundingClientRect().top < window.innerHeight * 0.25);
        const current = passed[passed.length - 1] || headings[0];
        setCurrent(current.id);
    }, { rootMargin: '0px 0px -75% 0px' });

    headings.forEach((h) => observer.observe(h));
})();
