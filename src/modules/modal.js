import { animate } from "./helpers";

const modal = () => {
  const body = document.querySelector('body');
  const modalCallback = body.querySelector('.modal-callback');
  const modalOverlay = body.querySelector('.modal-overlay');

  body.addEventListener('click', (e) => {
    if (e.target.closest('.header .callback-btn') || e.target.classList.contains('button-services')) {
      e.preventDefault();
      
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalCallback.style.opacity = progress;
          modalOverlay.style.opacity = progress;
        }
      });
    }
    if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
      e.preventDefault();

      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  })
}

export default modal;
