const swiperCoach = new Swiper(".swiper__coach", {
  slidesPerView: 6,
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiperSingle = new Swiper(".swiper__single", {
  slidesPerView: 1,
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});