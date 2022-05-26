const interestFirst = document.querySelector(".interest")
const interestSecond = interestFirst.nextElementSibling;
const interestCheckSecond = Array.from(interestSecond.querySelectorAll("input"))
const interestCheckFirst = Array.from(interestFirst.querySelectorAll("input"))

interestCheckFirst[0].onchange = function() {
  if (interestCheckFirst[0].checked){
    interestCheckFirst[1].checked = true;
    interestCheckFirst[2].checked = true;
  } else {
    interestCheckFirst[1].checked = false;
    interestCheckFirst[2].checked = false;
  }
}

interestCheckSecond[0].onchange = function() {
  if (interestCheckSecond[0].checked){
    interestCheckSecond[1].checked = true;
    interestCheckSecond[2].checked = true;
  } else {
    interestCheckSecond[1].checked = false;
    interestCheckSecond[2].checked = false;
  }
}


// interestCheck.onchange = item => console.log(interestCheck.checked);


// const interestCheckFoodBoxes = interestCheck.querySelectorAll(".interest__check")
// console.log(interestCheckFoodBoxes.checked)



// console.log(interestCheck)
// interest.forEach(item => interestCheck.addEventListener("change", console.log('hi')))

// for (let i of interest) {
//   console.log(i)
//   i.addEventListener("change", console.log('hi'))
// }
