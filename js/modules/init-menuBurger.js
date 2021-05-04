const buttonMenu = document.querySelector('.menu__button');
const menuContent = document.querySelector('.menu');
const mainContent = document.querySelector('.wrapper');


const initMenuBurger = () => {
  buttonMenu.addEventListener('click', () => {
    menuContent.classList.toggle('active');
    buttonMenu.classList.toggle('active');
    mainContent.classList.toggle('active');
    document.body.classList.toggle('lock');
  })
}

export { initMenuBurger }