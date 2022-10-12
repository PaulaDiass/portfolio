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

let theme = JSON.parse(localStorage.getItem('dark-theme'));
let darkTheme = theme ? theme : false;
let darkModeButton = document.querySelector('.dark-mode-button');
let darkModeIcon = document.querySelector('.dark-mode-icon');
const stylesheet = document.styleSheets[0];
const root = [...stylesheet.cssRules].find((r) => r.selectorText === ':root');

darkModeButton.addEventListener('click', () => handleSwitchTheme());

function setInitialTheme() {
  setThemeIcon();
  setThemeColors();
}
setInitialTheme();

function handleSwitchTheme() {
  darkTheme = !darkTheme;
  localStorage.setItem('dark-theme', darkTheme);
  setThemeIcon();
  setThemeColors();
}

function setThemeIcon() {
  darkModeIcon.classList.add(
    darkTheme ? 'bi-brightness-high-fill' : 'bi-moon-fill'
  );
  darkModeIcon.classList.remove(
    darkTheme ? 'bi-moon-fill' : 'bi-brightness-high-fill'
  );
}

function setThemeColors() {
  const newBackgroundColor = darkTheme ? 'var(--dark)' : 'var(--light)';

  const newTextColor = darkTheme ? 'var(--light)' : 'var(--dark)';

  root.style.setProperty('--background', newBackgroundColor);
  root.style.setProperty('--text', newTextColor);
}
