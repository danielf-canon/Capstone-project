const line1 = document.querySelector('.bar1');
const line2 = document.querySelector('.bar2');
const line3 = document.querySelector('.bar3');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.main-nav');

function openHbg() {
  line1.classList.toggle('activebar1');
  line2.classList.toggle('activebar2');
  line3.classList.toggle('activebar3');

  navMenu.classList.toggle('activeNavMenu');
  navBar.classList.toggle('activeNav');
}

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  line1.classList.remove('activebar1');
  line2.classList.remove('activebar2');
  line3.classList.remove('activebar3');

  navMenu.classList.remove('activeNavMenu');
  navBar.classList.remove('activeNav');
}));

hamburger.addEventListener('click', openHbg);