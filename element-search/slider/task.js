const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDot = Array.from(document.querySelectorAll(".slider__dots"))
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"))
const middleSliderDot = sliderDots.slice(1, sliderDots.length - 1);

function slideRevert() {
  let activeSlideIndex = sliderItems.findIndex(item => item.classList.contains("slider__item_active"));
  sliderItems[activeSlideIndex].classList.remove("slider__item_active");
  activeSlideIndex <= 0 ? (activeSlideIndex = sliderItems.length - 1) : activeSlideIndex--;
  sliderItems[activeSlideIndex].classList.add("slider__item_active");
}

function slideForward() {
  let activeSlideIndex = sliderItems.findIndex(item => item.classList.contains("slider__item_active"));
  sliderItems[activeSlideIndex].classList.remove("slider__item_active");
  activeSlideIndex === sliderItems.length - 1 ? (activeSlideIndex = 0) : activeSlideIndex++;
  sliderItems[activeSlideIndex].classList.add("slider__item_active");
}

sliderArrowPrev.addEventListener("click", slideRevert);
sliderArrowNext.addEventListener("click", slideForward);

sliderDot.forEach(item => {
  item.lastElementChild.addEventListener("click", slideRevert);
  item.firstElementChild.addEventListener("click", slideForward);
})

middleSliderDot.forEach(item => {
  item.addEventListener("click", function(elem) {
    let activeSlideIndex = sliderItems.findIndex(item => item.classList.contains("slider__item_active"));
    let activeDotIndex = sliderDots.indexOf(elem.target);
    sliderItems[activeSlideIndex].classList.remove("slider__item_active");
    sliderItems[activeDotIndex].classList.add("slider__item_active");
  })
})
