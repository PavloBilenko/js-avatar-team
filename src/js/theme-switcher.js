// export function setupThemeSwitcher() {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const favicon = document.getElementById('favicon');

  // const faviconLight = '/favicon-light.svg';
  // const faviconDark = '/favicon-dark.svg';

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
