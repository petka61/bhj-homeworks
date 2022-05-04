const reveal = document.querySelectorAll(".reveal");

for (let i in reveal) {
  window.addEventListener("scroll", function() {
    const { top, bottom } = reveal[i].getBoundingClientRect();
    if (bottom > 50) {
      reveal[i].classList.add("reveal_active")
    } else if (top < 50) {
      reveal[i].classList.remove("reveal_active")
    }
  })
}
