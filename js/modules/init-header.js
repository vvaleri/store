const header = document.querySelector('.header');

const initHeader = () => {
  window.addEventListener('scroll', () => { 
    let scrolled = document.documentElement.scrollTop;

    if (scrolled > 60) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed')
    }
  })
}

export { initHeader }