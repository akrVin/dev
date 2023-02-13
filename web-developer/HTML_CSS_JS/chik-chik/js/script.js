const addPreload = (elem) => {
  elem.classList.add('preload') // added element preload
};

const removePreload = (elem) => {
  elem.classList.remove('preload') // remove element preload
};

const startSlider = (slider) => {
  const sliderItems = document.querySelectorAll('.slider__item'); // get all elements
  // console.log('sliderItems', sliderItems);
  const sliderList = document.querySelector('.slider__list'); // get class .slider__list
  const btnPrevSlider = document.querySelector('.slider__arrow_left'); // get element button left
  const btnNextSlider = document.querySelector('.slider__arrow_right'); // get element button right

  let activeSlide = 1; // active slider
  let position = 0; // the inital position of the slider 

  const nextSlide = () => {
    sliderItems[activeSlide]
    // console.log('sliderItems[activeSlide]: ', sliderItems[activeSlide]);
  };

  const prevSlide = () => {
    
  };

  btnPrevSlider.addEventListener('click', prevSlide);
  btnNextSlider.addEventListener('click', nextSlide);
}


/* ================= */

const initSlider = () => {
  const slider = document.querySelector('.slider'); // seatch class slider 
  const sliderContainer = document.querySelector('.slider__container');
  
  sliderContainer.style.display = 'none';
  addPreload(slider);
  
  window.addEventListener('load', () => {

    sliderContainer.style.display = '';
    removePreload(slider);

    startSlider(slider); // 
  });
};

window.addEventListener('DOMContentLoaded', initSlider); // DOMContentLoaded - page loading widthout images
initSlider(); // function call


// console.log('window', window) // browsers window in console


// console.log(slider) // getting an elemenevenvt