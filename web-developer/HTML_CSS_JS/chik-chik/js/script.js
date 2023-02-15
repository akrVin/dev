const addPreload = (elem) => {
  elem.classList.add('preload') // added element preload
};

const removePreload = (elem) => {
  elem.classList.remove('preload') // remove element preload
};

const startSlider = (slider) => {
  const sliderItems = document.querySelectorAll('.slider__item'); // get all elements
  const sliderList = document.querySelector('.slider__list'); // get class .slider__list
  const btnPrevSlider = document.querySelector('.slider__arrow_left'); // get element button left
  const btnNextSlider = document.querySelector('.slider__arrow_right'); // get element button right

  let activeSlide = 1; // active slider
  let position = 0; // the inital position of the slider 

  const checkSlider =  () => {
    if ((activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560) || activeSlide === sliderItems.length) {
      btnNextSlider.style.display = 'none';
    } else {
      btnNextSlider.style.display = '';
    }

    if (activeSlide === 1) {
      btnPrevSlider.style.display = 'none';
    } else {
      btnPrevSlider.style.display = '';
    }
  } // scroll limit

  checkSlider();

  const nextSlide = () => {
    sliderItems[activeSlide]?.classList.remove('slider__item_active');
    position = -sliderItems[0].clientWidth * activeSlide;

    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide += 1;
    sliderItems[activeSlide]?.classList.add('slider__item_active');
    checkSlider();
  };

  const prevSlide = () => {
    sliderItems[activeSlide]?.classList.remove('slider__item_active');
    position = -sliderItems[0].clientWidth * (activeSlide - 2);

    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide -= 1;
    sliderItems[activeSlide]?.classList.add('slider__item_active');
    checkSlider();
  };

  btnPrevSlider.addEventListener('click', prevSlide);
  btnNextSlider.addEventListener('click', nextSlide);

  window.addEventListener('resize', () => {
    if (activeSlide + 2 > sliderItems.length && document.documentElement.offsetWidth > 560) {
      activeSlide = sliderItems.length - 2;
      sliderItems[activeSlide]?.classList.add('slider__item_active');
    }

    position = -sliderItems[0].clientWidth * (activeSlide - 1);
    sliderList.style.transform = `translateX(${position}px)`;
    checkSlider();
  });
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



