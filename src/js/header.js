// Прокрутка хедера
const header = document.querySelector('.header-container');
function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButton = document.getElementById('header-button');
  const menu = document.getElementById('modal-container');
  const iconMenu = document.querySelector('.header-button-icon');
  const iconClose = document.querySelector('.header-close-icon');
  let isMenuOpen = false;

  menuToggleButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      menu.classList.add('show');
      iconMenu.style.display = 'none';
      iconClose.style.display = 'block';
    } else {
      menu.classList.remove('show');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
    }
  });

  // Закриваємо меню, якщо клацнути поза ним
  document.addEventListener('click', event => {
    if (
      !menu.contains(event.target) &&
      !menuToggleButton.contains(event.target)
    ) {
      menu.classList.remove('show');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
      isMenuOpen = false;
    }
  });
});
