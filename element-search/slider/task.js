const slider_arrow_prev = document.querySelector(".slider__arrow_prev");
const slider_arrow_next = document.querySelector(".slider__arrow_next");
let slider_items = Array.from(document.querySelectorAll(".slider__item"));
const last_slide = slider_items[slider_items.length - 1];

const slideForward = function() {
  for (let i in slider_items) {
    try {
      if (slider_items[i].classList.contains("slider__item_active")) {
        slider_items[i].nextElementSibling.classList.add("slider__item_active")
        slider_items[i].classList.remove("slider__item_active")
        break
      }
    } catch (error) {
      slider_items[i].classList.remove("slider__item_active")
      slider_items[0].classList.add("slider__item_active")
    }
  }
}

const slideBackward = function() {
  for (let i in slider_items) {
    try {
      if (slider_items[i].classList.contains("slider__item_active")) {
        slider_items[i].previousElementSibling.classList.add("slider__item_active")
        slider_items[i].classList.remove("slider__item_active")
        break
      } else if (slider_items[i].nextElementSibling == null) {
        slider_items[i].classList.remove("slider__item_active")
        last_slide.classList.add("slider__item_active")
      }
    } catch (error) {
      slider_items[i].classList.remove("slider__item_active")
      slider_items[0].classList.add("slider__item_active")
    }
  }
}

slider_arrow_prev.addEventListener("click", slideBackward);
slider_arrow_next.addEventListener("click", slideForward);


// if (event.currentTarget.classList.contains("slider__arrow_next")) {}









// if (slider_items[i] === slider_items.lastElementChild) {
//   slider_items[i].firstElementChild.classList.add("slider__item_active")
// }
