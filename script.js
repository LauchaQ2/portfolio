
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})