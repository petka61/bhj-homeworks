const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
let activeSlideIndex = sliderItems.findIndex(item => item.classList.contains("slider__item_active"));

function slideRevert() {
  sliderItems[activeSlideIndex].classList.remove("slider__item_active");
  activeSlideIndex --;
  activeSlideIndex === sliderItems.length ? (activeSlideIndex = 0) : "";
  activeSlideIndex === -1 ? (activeSlideIndex = sliderItems.length - 1) : "";
  sliderItems[activeSlideIndex].classList.add("slider__item_active");
}

function slideForward() {
  sliderItems[activeSlideIndex].classList.remove("slider__item_active");
  activeSlideIndex ++;
  activeSlideIndex === sliderItems.length ? (activeSlideIndex = 0) : "";
  activeSlideIndex === -1 ? (activeSlideIndex = sliderItems.length - 1) : "";
  sliderItems[activeSlideIndex].classList.add("slider__item_active");
}

sliderArrowPrev.addEventListener("click", slideRevert);
sliderArrowNext.addEventListener("click", slideForward);
