const reveal = document.querySelectorAll(".reveal");


  window.addEventListener("scroll", function() {
  reveal.forEach(item => {
    if (window.innerHeight > item.getBoundingClientRect().top &&
        item.getBoundingClientRect().bottom > 0) {
      item.classList.add("reveal_active")
    } else {
      item.classList.remove("reveal_active")
    }
  }
)}
)
