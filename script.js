let openMenu = false;
let menuIconButton = document.getElementsByClassName('nav-menu-icon')[0];
let menuIconImg = document.getElementsByClassName('nav-menu-icon-img')[0];
let menu = document.getElementsByClassName('nav-menu')[0];

function responsiveMenu() {
  menuIconButton.addEventListener('click', () => handleOpenMenu());
}
responsiveMenu();

function handleOpenMenu() {
  openMenu = !openMenu;
  menuIconImg.src = openMenu ? './assets/x-lg.svg' : './assets/list.svg';
  menu.style.display = openMenu ? 'flex' : 'none';
}
