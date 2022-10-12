//responsive menu

let openMenu = false;
let menuIconButton = document.querySelector('.nav-menu-button');
let menuIcon = document.querySelector('.nav-menu-icon');
let menu = document.querySelector('.nav-menu');
let navLinks = menu.querySelectorAll('.nav-link');

if (window.innerWidth <= 505) {
  responsiveMenu();
}

function responsiveMenu() {
  menuIconButton.addEventListener('click', () => handleOpenMenu());
  navLinks.forEach((link) => {
    link.addEventListener('click', () => handleOpenMenu());
  });
}

function handleOpenMenu() {
  openMenu = !openMenu;
  menuIcon.classList.add(openMenu ? 'bi-x-lg' : 'bi-list');
  menuIcon.classList.remove(openMenu ? 'bi-list' : 'bi-x-lg');
  menu.style.setProperty('display', openMenu ? 'flex' : 'none');
}

//dark theme

let darkTheme = false;
let darkModeButton = document.querySelector('.dark-mode-button');
let darkModeIcon = document.querySelector('.dark-mode-icon');
const stylesheet = document.styleSheets[0];
const root = [...stylesheet.cssRules].find((r) => r.selectorText === ':root');

function darkMode() {
  darkModeButton.addEventListener('click', () => handleSwitchTheme());
}
darkMode();

function handleSwitchTheme() {
  darkTheme = !darkTheme;
  darkModeIcon.classList.add(
    darkTheme ? 'bi-brightness-high-fill' : 'bi-moon-fill'
  );
  darkModeIcon.classList.remove(
    darkTheme ? 'bi-moon-fill' : 'bi-brightness-high-fill'
  );

  const newBackgroundColor = darkTheme
    ? 'var(--dark-color)'
    : 'var(--light-color)';

  const newTextColor = darkTheme ? 'var(--light-color)' : 'var(--dark-color)';

  root.style.setProperty('--background', newBackgroundColor);
  root.style.setProperty('--text', newTextColor);
}
