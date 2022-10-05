let openMenu = false;
let menuIconButton = document.querySelector('.nav-menu-icon');
let menuIconImg = document.querySelector('.nav-menu-icon-img');
let menu = document.querySelector('.nav-menu');
let navLinks = menu.querySelectorAll('.nav-link');

function responsiveMenu() {
  menuIconButton.addEventListener('click', () => handleOpenMenu());
  navLinks.forEach((link) => {
    link.addEventListener('click', () => handleOpenMenu());
  });
}
responsiveMenu();

function handleOpenMenu() {
  openMenu = !openMenu;
  menuIconImg.src = openMenu
    ? '../../assets/x-lg.svg'
    : '../../assets/list.svg';
  menu.style.setProperty('display', openMenu ? 'flex' : 'none');
}

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
  darkModeIcon.src = darkTheme
    ? '../../assets/brightness-high.svg'
    : '../../assets/moon-fill.svg';

  const newBackgroundColor = darkTheme
    ? 'var(--dark-color)'
    : 'var(--light-color)';

  const newTextColor = darkTheme ? 'var(--light-color)' : 'var(--dark-color)';

  root.style.setProperty('--background', newBackgroundColor);
  root.style.setProperty('--text', newTextColor);
}
