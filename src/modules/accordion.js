const accordion = () => {
  const accordion = document.querySelector('.accordeon');

  const hideAccordion = () => {
    const faqElement = accordion.querySelectorAll('.element');
    const elementContent = accordion.querySelectorAll('.element-content');

    faqElement.forEach(element => {
      element.classList.remove('active');
    })

    elementContent.forEach(element => {
      element.style.display = 'none';
    })
  }

  const changeAccordion = (e) => {
    const faqBtn = e.target.closest('.element');

    if (faqBtn.classList.contains('active')) {
      hideAccordion();
    } else {
      hideAccordion();
      faqBtn.classList.add('active');
      faqBtn.lastElementChild.style.display = 'block';
    }
  }

  accordion.addEventListener('click', changeAccordion);
}

export default accordion;
