const book = document.querySelector(".book")
const fontSize = Array.from(document.querySelectorAll(".font-size"));
const bgControl = document.querySelector(".book__control_background")
const bgControlSwitches = Array.from(bgControl.querySelectorAll(".color"))
const allButtons = document.querySelectorAll(".book__control a")
const color = document.querySelector(".book__control_color");
const colorControlSwitches = Array.from(color.querySelectorAll(".color"))

allButtons.forEach(elem => elem.addEventListener("click", function() {
  elem.classList = "";
  event.preventDefault();
  if (elem.parentElement.classList.contains("book__control_color")) {
    colorControlSwitches.forEach(item => item.classList.remove("color_active"))
    book.classList.remove('book_color-gray', 'book_color-whitesmoke');
    book.classList.add(`book_color-${elem.dataset.textColor}`, "book");
    elem.classList.add("color", "color_active", `text_color_${elem.dataset.textColor}`)

  } else if (elem.parentElement.classList.contains("book__control_background")) {
    bgControlSwitches.forEach(item => item.classList.remove("color_active"))
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
    book.classList.add(`book_bg-${elem.dataset.bgColor}`, "book");
    elem.classList.add("color", "color_active", `bg_color_${elem.dataset.bgColor}`)

  } else if (elem.parentElement.classList.contains("book__control_font-size")) {
    fontSize.forEach(item => item.classList.remove("font-size_active"))
    book.classList.remove('book_fs-big', 'book_fs-small');
    book.classList.add(`book_fs-${elem.dataset.size}`, "book")
    elem.classList.add("font-size", "font-size_active", `font-size_${elem.dataset.size}`)
  }
}))
