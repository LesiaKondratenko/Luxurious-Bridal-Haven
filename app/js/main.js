const swiper = new Swiper('.accessories__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.accessories__arrow--next',
    prevEl: '.accessories__arrow--prev',
  },
  loop: true,
});
