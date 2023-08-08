const burger = document.querySelector('.burger');


// function(burger_menu) {
//   burger.addEventListener('click', (e) => {
//     burger.classList.toggle('burger--active');
//   })
// }
if (burger) {
  burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger_active');
  });
}

burger_menu();