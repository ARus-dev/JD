const slides = document.querySelectorAll('.slider__slide')
const buttonPrev = document.querySelector('.slider__btn_prev')
const buttonNext = document.querySelector('.slider__btn_next')

let current = 0

buttonNext.addEventListener("click", () => {
    ++current
    if (current >= slides.length) {
        slides[current-1].classList.remove('slider__slide_current');
        current = 0;
        slides[current].classList.add('slider__slide_current');
    } else {
        slides[current-1].classList.remove('slider__slide_current');
        slides[current].classList.add('slider__slide_current');
    }
})
buttonPrev.addEventListener("click", () => {
    --current
    if (current < 0) {
        slides[current+1].classList.remove('slider__slide_current');
        current = slides.length - 1;
        slides[current].classList.add('slider__slide_current');
    } else {
        slides[current+1].classList.remove('slider__slide_current');
        slides[current].classList.add('slider__slide_current');
    }
})