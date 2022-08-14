const scroll = () => {
  const btnUp = document.querySelector('.up');
  const services = document.getElementById('services');
  const header = document.querySelector('.header-wrapper');

  let scrolled;
  let animation;

  const hideBtn = (elem) => {
    elem.style.display = 'none';
  }

  const scrollToTop = () => {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      animation = requestAnimationFrame(scrollToTop)
    } else {
      cancelAnimationFrame(animation)
      window.scrollTo(0, 0);
    }
  }

  hideBtn(btnUp);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= services.offsetTop - header.clientHeight) {
      btnUp.style.display = 'block';
    } else {
      hideBtn(btnUp);
    }
  })

  btnUp.addEventListener('click', () => {
    scrolled = window.scrollY;
    scrollToTop();
  })
}

export default scroll;
