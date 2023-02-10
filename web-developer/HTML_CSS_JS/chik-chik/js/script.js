const addPreload = (elem) => {
  elem.classList.add('preload')
};

const removePreload = (elem) => {
  elem.classList.remove('preload')
};

const startSlider = (slider) => {
  removePreload(slider);
}


/* ================= */

const initSlider = () => {
  const slider = document.querySelector('.slider');

  addPreload(slider)
  window.addEventListener('load', () => {
    startSlider(slider);
  });
};

window.addEventListener('DOMContentLoaded', initSlider); // DOMContentLoaded - page loading widthout images
initSlider(); // function call

// window.addEventListener('load', initSlider);
// console.log('window', window) // browsers window in console


// console.log(slider) // getting an element