// Menu burger mobile avec overlay plein écran
const burger  = document.getElementById('menu-burger');
const overlay = document.getElementById('mobile-menu-overlay');
const closeBtn = document.getElementById('menu-close');

function openMenu() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (burger) burger.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});
