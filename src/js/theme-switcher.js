// export function setupThemeSwitcher() {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const favicon = document.getElementById('favicon');

  // const faviconLight = './img/favicons-img/favicon-light.svg';
  // const faviconDark = './img/favicons-img/favicon-dark.svg';

  // const savedTheme = localStorage.getItem('theme');

  // if (savedTheme === 'dark') {
  //   body.classList.add('dark-theme');
  //   favicon.href = faviconDark;
  // } else {
  //   favicon.href = faviconLight;
  // }

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
      favicon.href = faviconDark;
      localStorage.setItem('theme', 'dark');
    } else {
      favicon.href = faviconLight;
      localStorage.setItem('theme', 'light');
    }
  });
// }
