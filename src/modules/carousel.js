const carousel = () => {
  const slider = document.querySelector('.swiper-container');

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      }
    }
  });
}

export default carousel;
