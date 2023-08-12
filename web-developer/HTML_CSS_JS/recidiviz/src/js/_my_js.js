const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.body;
const navLinks = document.querySelectorAll('.nav__link');

if (burger) {
  burger.addEventListener('click', (e) => {
    body.classList.toggle('body_lock');
    header.classList.toggle('header_active');
    burger.classList.toggle('burger_active');
  });
}

navLinks.forEach(mon => {
  mon.addEventListener('click', () => {
    body.classList.remove('body_lock');
    header.classList.remove('header_active');
    burger.classList.remove('burger_active');
  });
});