document.addEventListener("DOMContentLoaded", (event) => {
    function appearOnScroll() {
        let counter = 0;

        addEventListener("scroll", () => {
            showItems(counter);
        });

        addEventListener("load", () => {
            showItems(counter);
        });
    }

    function showItems(counter) {
        let hiddenItems = document.querySelectorAll('.appear-on-scroll:not(.show)');

        if (!hiddenItems) return;

        hiddenItems.forEach(function (item) {
            if (checkVisible(item)) {
                item.style.transitionDelay = (counter * .1) + .2 + "s";
                item.classList.add('show');
                counter++;

                setTimeout(() => {
                    counter--
                }, ((counter * .1) * 1000) + 400);
            }
        })
    }

    function checkVisible(item) {
        let rect = item.getBoundingClientRect();
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    appearOnScroll();

    function showHeader() {
        let lastScroll = 0;

        addEventListener("scroll", () => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
            let header = document.querySelector('header');
            let menuContainer = document.querySelector('.menu-container');
            let stickySingleContainer = document.querySelector('.single-container .right-area');
            let vh = window.innerHeight;
            let scrolled = window.scrollTop;

            if (window.scrollY > window.innerHeight / 2) {
                if (currentScroll > 0 && lastScroll <= currentScroll) {
                    lastScroll = currentScroll;
                    if (!menuContainer.classList.contains('show')) {
                        header.classList.add('hide');
                        if (stickySingleContainer) {
                            stickySingleContainer.classList.add('header-hidden');
                        }
                    }
                } else {
                    lastScroll = currentScroll;
                    header.classList.remove('hide');
                    if (stickySingleContainer) {
                        stickySingleContainer.classList.remove('header-hidden');
                    }
                }
            }
        });
    }

    showHeader();
});
