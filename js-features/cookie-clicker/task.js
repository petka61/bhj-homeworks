const clicker_counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clicker_speed = document.getElementById("clicker__speed");
let start = Date.now();

function changeSize() {
  if (cookie.width === 150) {
    cookie.width = 200
  } else {
    cookie.width = 150;
  }
  const clickNumber = clicker_counter.textContent++;
  let end = Date.now();
  const duration = (1 / ((end - start) / 1000)).toFixed(2);
  clicker_speed.textContent = duration;
  start = end;
}

cookie.onclick = changeSize;
