const fontSize = Array.from(document.querySelectorAll(".font-size"));
const color = document.querySelector(".book__control_color");
const colorControlSwitches = Array.from(color.querySelectorAll(".color"))
const book = document.querySelector(".book")
const bgControl = document.querySelector(".book__control_background")
const bgControlSwitches = Array.from(bgControl.querySelectorAll(".color"))

for (let i in fontSize) {
  fontSize[i].addEventListener("click", function() {
    fontSize.forEach(item => item.classList.remove("font-size_active"))
    if (fontSize[i].dataset.size === "big") {
      book.classList.remove("book_fs-small")
      book.classList.add("book_fs-big")
    } else if (fontSize[i].dataset.size === "small") {
      book.classList.remove("book_fs-big")
      book.classList.add("book_fs-small")
    } else {
      book.classList.remove("book_fs-small")
      book.classList.remove("book_fs-big")
    }
    fontSize[i].classList.add("font-size_active")
    event.preventDefault();
  })
}

for (let i in colorControlSwitches) {
  colorControlSwitches[i].addEventListener("click", function() {
    colorControlSwitches.forEach(item => item.classList.remove("color_active"))
    if (colorControlSwitches[i].dataset.textColor === "gray") {
      book.classList.remove("book_color-black")
      book.classList.remove("book_color-whitesmoke")
      book.classList.add("book_color-gray")
    } else if (colorControlSwitches[i].dataset.textColor === "whitesmoke") {
      book.classList.remove("book_color-black")
      book.classList.remove("book_color-gray")
      book.classList.add("book_color-whitesmoke")
    } else {
      book.classList.add("book_color-black")
      book.classList.remove("book_color-gray")
      book.classList.remove("book_color-whitesmoke")
    }
    colorControlSwitches[i].classList.add("color_active")
    event.preventDefault();
  })
}

for (let i in bgControlSwitches) {
  bgControlSwitches[i].addEventListener("click", function() {
    bgControlSwitches.forEach(item => item.classList.remove("color_active"))
    if (bgControlSwitches[i].dataset.bgColor === "gray") {
      book.classList.remove("book_bg-black")
      book.classList.remove("book_bg-white")
      book.classList.add("book_bg-gray")
    } else if (bgControlSwitches[i].dataset.bgColor === "white") {
      book.classList.remove("book_bg-black")
      book.classList.remove("book_bg-gray")
      book.classList.add("book_bg-white")
    } else {
      book.classList.add("book_bg-black")
      book.classList.remove("book_bg-gray")
      book.classList.remove("book_bg-white")
    }
    bgControlSwitches[i].classList.add("color_active")
    event.preventDefault();
  })
}
