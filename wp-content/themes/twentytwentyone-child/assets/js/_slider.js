document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper('.swiper.single', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const testimonials = new Swiper('.swiper.testimonials', {
    loop: true,
    autoplay: {
      enabled: true,
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView:'auto',
  });
});
