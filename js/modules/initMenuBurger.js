const buttonMenu = document.querySelector('.menu__burger');
const menuContent = document.querySelector('.menu__inner');

const initMenuBurger = () => {
  buttonMenu.addEventListener('click', () => {
    menuContent.classList.toggle('active');
    buttonMenu.classList.toggle('active');
  })
}

export { initMenuBurger }