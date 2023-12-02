const swiper = new Swiper(".swiper", {
  speed: 800,
  spaceBetween: 100,
  orientation: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  keyboard: {
    enabled: true,
  },
});

