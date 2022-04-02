const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const toZero = function() {
  return lost.textContent = 0,
    dead.textContent = 0
}

function checkHole() {
  if (this.classList.contains('hole_has-mole')) {
    dead.textContent++;
    if (dead.textContent == 10) {
      alert("Вы выиграли!")
      toZero();
    }
  } else {
    lost.textContent++;
    if (lost.textContent == 5) {
      alert("Вы проиграли!")
      toZero();
    }
  }
}


function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = checkHole;
}
