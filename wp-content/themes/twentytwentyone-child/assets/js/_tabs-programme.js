// Onglets programme par jour
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.programme__tab-btn');
    const days  = document.querySelectorAll('.programme__day');

    if (!tabs.length) return;

    // Activer le premier onglet par défaut
    tabs[0].classList.add('is-active');
    tabs[0].setAttribute('aria-selected', 'true');
    days[0].classList.add('is-active');
    days[0].removeAttribute('hidden');

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
            days.forEach(d => { d.classList.remove('is-active'); d.setAttribute('hidden', ''); });

            tab.classList.add('is-active');
            tab.setAttribute('aria-selected', 'true');
            days[i].classList.add('is-active');
            days[i].removeAttribute('hidden');
        });
    });
});
