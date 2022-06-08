const hamburgerMenu = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener(
  'click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active')
  }
))


let lastScrollTop = 0;
let navbar = document.getElementById('navbar');

window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0px";
  }
  lastScrollTop = scrollTop;
})