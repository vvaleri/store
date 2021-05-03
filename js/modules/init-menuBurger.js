const buttonMenu = document.querySelector('.menu__burger');
const menuContent = document.querySelector('.menu');

const initMenuBurger = () => {
  buttonMenu.addEventListener('click', () => {
    menuContent.classList.toggle('active');
    buttonMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
  })
}

export { initMenuBurger }