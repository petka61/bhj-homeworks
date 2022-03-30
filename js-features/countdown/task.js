let timeArr = [
  00, 00, 05
]
let hours = timeArr[0];
let minutes = timeArr[1];
let seconds = timeArr[2];

const timeBack = function() {
const timeMashine = document.getElementById("timer");
if (hours < 10) {
  hours = ('0' + hours).slice(-2);
};
if (minutes < 10) {
   minutes = ('0' + minutes).slice(-2);
 };
 if (seconds < 10) {
    seconds = ('0' + seconds).slice(-2);
  };
  timeMashine.textContent = hours + ':' + minutes + ':' + seconds;
  seconds--;
  if (hours == 0 && minutes == 0 && seconds == -1) {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
    window.location.assign('vasiliev.txtt'); 
  } else if (seconds == -1) {
    seconds = 59;
    minutes--;
  } else if (minutes == 0 && hours > 0) {
    minutes = 59;
    hours--;
  }
}

let interval = setInterval(timeBack, 1000)
