const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));
let index = 0;

function hide() {
    sliderItems[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
}

function activated() {
    sliderDots[index].classList.add('slider__dot_active');
    sliderItems[index].classList.add('slider__item_active');
}

sliderArrowNext.addEventListener("click", function(){
  hide();
  index === sliderItems.length - 1 ? (index = 0) : index++;
  activated();
})

sliderArrowPrev.addEventListener("click", function(){
    hide();
    index <= 0 ? (index = sliderItems.length - 1) : index--;
    activated();
})



sliderDots.forEach((el, i) => {
    el.onclick = () => {
        hide();
        index = i;
        activated();
    }
})
