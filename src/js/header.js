// Прокрутка хедера
const header = document.querySelector('.header');
function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', checkScroll);

// Мобільне меню
document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButton = document.getElementById('header-button');
  const menu = document.getElementById('modal-container');
  const iconMenu = document.querySelector('.header-button-icon');
  const iconClose = document.querySelector('.header-close-icon');
  const menuLinks = document.querySelectorAll('.mobile-menu a');

  const toggleMenu = isOpen => {
    menu.classList.toggle('show', isOpen);
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
    document.body.classList.toggle('body-no-scroll', isOpen);
    document.documentElement.classList.toggle('body-no-scroll', isOpen);
  };

  let isMenuOpen = false;

  menuToggleButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    toggleMenu(isMenuOpen);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      toggleMenu(isMenuOpen);
    });
  });

  // Закриття меню при кліку поза ним
  document.addEventListener('click', event => {
    if (
      isMenuOpen &&
      !menu.contains(event.target) &&
      !menuToggleButton.contains(event.target)
    ) {
      isMenuOpen = false;
      toggleMenu(isMenuOpen);
    }
  });
});
