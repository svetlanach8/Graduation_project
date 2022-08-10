const navigation = () => {
  const headerLinks = document.querySelectorAll('.header ul>li>a');
  let linkAttribute;

  const scrollToBlock = (link, blockLink) => {
    link = blockLink.getAttribute('href');

    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  headerLinks.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToBlock(linkAttribute, item);
    })
  })
}

export default navigation;