const carousel = () => {
  const slider = document.querySelector('.swiper-container');

  const swiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export default carousel;
