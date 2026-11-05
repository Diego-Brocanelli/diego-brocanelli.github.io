// Página do post (layouts/single.html): barra de progresso de leitura e
// sumário lateral com a seção atual destacada.

(() => {
    const content = document.querySelector('.post-content');
    const bar = document.querySelector('.reading-progress span');
    const toc = document.querySelector('.toc');
    const wide = window.matchMedia('(min-width: 1200px)');

    // ---- Barra de progresso: mede só o texto do post (não comentários/rodapé)
    if (content && bar) {
        let ticking = false;

        const update = () => {
            const rect = content.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
            bar.style.transform = `scaleX(${progress})`;
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
