function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
  const slides       = document.querySelectorAll(slide),
  slider       = document.querySelector(container), 
  next         = document.querySelector(nextArrow),
  prev         = document.querySelector(prevArrow),
  current = document.querySelector(currentCounter),
  total = document.querySelector(totalCounter),
  slidesWrapper = document.querySelector(wrapper),
  slidesField = document.querySelector(field),
  width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;

  if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

    slidesField.style.width = 100 * slides.length +"%";
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';


    slides.forEach(slide => {
    slide.style.width = width;
  });

  //dots

  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
    dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i+1);
    dot.classList.add('dot');
    if(i==0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  //end dots

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }

  next.addEventListener('click', () => {

  if(offset == deleteNotDigits(width) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += deleteNotDigits(width);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if(slideIndex == slides.length) {
    slideIndex = 1;
  } else {
    slideIndex ++;
  }

  if(slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  }

  showActiveDot();
  });

  prev.addEventListener('click', () => {

  if(offset == 0) {
    offset = deleteNotDigits(width) * (slides.length - 1);
  } else {
    offset -= deleteNotDigits(width);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if(slideIndex == 1) {
    slideIndex = slides.length;
  } else {
    slideIndex --;
  }

  displayCurrent();
  showActiveDot();
  });

  dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
  const slideTo = e.target.getAttribute('data-slide-to');

  slideIndex = slideTo;
  offset = deleteNotDigits(width) * (slideTo - 1);
  slidesField.style.transform = `translateX(-${offset}px)`;

  displayCurrent();
  showActiveDot();
  });
  });

  function displayCurrent() {
  if(slides.length < 10) {
  current.textContent = `0${slideIndex}`;
  } else {
  current.textContent = slideIndex;
  }
  }

  function showActiveDot(){
  dots.forEach(dot => dot.style.opacity = '.5');
  dots[slideIndex - 1].style.opacity = 1;
  }
}

export default slider;



/* -------simple slider--------- */
  // (() => {

  //   const slides       = document.querySelectorAll('.offer__slide'),
  //         next         = document.querySelector('.offer__slider-next'),
  //         prev         = document.querySelector('.offer__slider-prev'),
  //         current = document.querySelector('#current'),
  //         total = document.querySelector('#total');
  //   let slideIndex = 1;

  //   showSlides(slideIndex);

  //   if(slides.length < 10) {
  //     total.textContent = `0${slides.length}`;
  //   } else {
  //     total.textContent = slides.length;
  //   }

  //   function showSlides(n) {
  //     if(n > slides.length) {
  //       slideIndex = 1;
  //     }

  //     if(n < 1) {
  //       slideIndex = slides.length;
  //     }

  //     slides.forEach(slide => {
  //       slide.classList.add('hide');
  //       slide.classList.remove('show');
  //     });

  //     slides[slideIndex - 1].classList.add('show');
  //     slides[slideIndex - 1].classList.remove('hide');

  //     if(slides.length < 10 < 10) {
  //         current.textContent = `0${slideIndex}`;
  //       } else {
  //         current.textContent = slideIndex;
  //       }
  //   }

  //   function plusSlides(n) {
  //     showSlides(slideIndex += n);
  //   }

  //   next.addEventListener('click', () => {
  //     plusSlides(1);
  //   });

  //   prev.addEventListener('click', () => {
  //     plusSlides(-1);
  //   });

  // })();