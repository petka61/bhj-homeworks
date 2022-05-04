const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book")


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
