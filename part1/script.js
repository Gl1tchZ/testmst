const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Если прокрутили больше 50px
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});