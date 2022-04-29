const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
let sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const lastSlide = sliderItems[sliderItems.length - 1];

const slideForward = function() {
  for (let i in sliderItems) {
    try {
      if (sliderItems[i].classList.contains("slider__item_active")) {
        sliderItems[i].nextElementSibling.classList.add("slider__item_active")
        sliderItems[i].classList.remove("slider__item_active")
        break
      }
    } catch (error) {
      sliderItems[i].classList.remove("slider__item_active")
      sliderItems[0].classList.add("slider__item_active")
    }
  }
}

const slideBackward = function() {
  for (let i in sliderItems) {
    try {
      if (sliderItems[i].classList.contains("slider__item_active")) {
        sliderItems[i].previousElementSibling.classList.add("slider__item_active")
        sliderItems[i].classList.remove("slider__item_active")
        break
      } else if (sliderItems[i].nextElementSibling == null) {
        sliderItems[i].classList.remove("slider__item_active")
        lastSlide.classList.add("slider__item_active")
      }
    } catch (error) {
      sliderItems[i].classList.remove("slider__item_active")
      sliderItems[0].classList.add("slider__item_active")
    }
  }
}

sliderArrowPrev.addEventListener("click", slideBackward);
sliderArrowNext.addEventListener("click", slideForward);


// if (event.currentTarget.classList.contains("slider__arrow_next")) {}









// if (sliderItems[i] === sliderItems.lastElementChild) {
//   sliderItems[i].firstElementChild.classList.add("slider__item_active")
// }
