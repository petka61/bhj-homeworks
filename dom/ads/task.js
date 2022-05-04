const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;
let time = 1000;

setInterval(function() {
  for (let i = 0; i < rotatorCase.length; i++) {
    time = rotatorCase[i].dataset.speed;
    rotatorCase[i].style.color = rotatorCase[i].dataset.color;
    rotatorCase[i].classList.remove("rotator__case_active")
    rotatorCase[index].classList.add("rotator__case_active")
  }
  // console.log(time)
  index++;
  if (index >= rotatorCase.length) {
    index = 0;
  }
}, this.time)
