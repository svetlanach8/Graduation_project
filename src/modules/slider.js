const slider = () => {
  const itemSlider = document.querySelectorAll('.top-slider .item');
  const textSlider = document.querySelectorAll('.top-slider .table');

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(itemSlider, currentSlide, 'slider-item-active');
    prevSlide(textSlider, currentSlide, 'active');

    currentSlide++;

    if (currentSlide >= itemSlider.length) {
      currentSlide = 0;
    }

    nextSlide(itemSlider, currentSlide, 'slider-item-active');
    nextSlide(textSlider, currentSlide, 'active');
  }

  const startSlide = (timer) => {
    interval = setInterval(autoSlide, timer);
  }

  startSlide(3000);
}

export default slider;
