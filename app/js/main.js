const swiper = new Swiper('.accessories__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.accessories__arrow--next',
    prevEl: '.accessories__arrow--prev',
  },
});

const swiperReviews = new Swiper('.reviews-slider', {
  slidesPerView: 11,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.reviews-slider-next',
    prevEl: '.reviews-slider-prev',
  },
     pagination: {
        el: ".reviews-slider-pagination",
        type: "fraction",
      },

});
