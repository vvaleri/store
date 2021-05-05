const header = document.querySelector('.header');
const breakpoint = window.matchMedia('(max-width:768px)');

const initHeader = () => {

  const isMobile = () => {
    let scrolled = document.documentElement.scrollTop;

    if (scrolled > 10) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed')
    }
  }

  window.addEventListener('scroll', () => { 
    let scrolled = document.documentElement.scrollTop;

    if (breakpoint.matches) {
      isMobile();
    } else if (scrolled > 60) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  })

  breakpoint.addEventListener('change', isMobile);
}

export { initHeader }