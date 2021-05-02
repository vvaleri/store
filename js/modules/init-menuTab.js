const menuButtons = document.querySelectorAll('.menu__item');
const mainContent = document.querySelectorAll('.main-content');
const pageTitle = document.querySelector('.header__title');
const tabText = document.querySelectorAll('.link-menu__text');

const initMenuTab = () => {
  
  function openTab() {
    menuButtons.forEach(item => {
      const buttonAttribute = item.getAttribute('data-menu');
      const contentItem = document.querySelector(`.main-content[data-menu="${buttonAttribute}"]`);

      item.addEventListener('click', e => {
        e.preventDefault();

        closeTab();

        item.classList.add('active');
        contentItem.classList.add('active');

        getTabText()
        
      })
    })
  }

  openTab()

  function closeTab() {
    menuButtons.forEach(item => item.classList.remove('active'));
    mainContent.forEach(item => item.classList.remove('active'))
  }


  function getTabText() {
    tabText.forEach(item => {
      const textItem = item.textContent;
      if(item.closest('.menu__item').classList.contains('active')) {
        pageTitle.innerText = textItem;
      }
    })
  }

  getTabText();
}

export { initMenuTab }