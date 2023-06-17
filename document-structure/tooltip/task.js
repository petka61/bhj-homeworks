const links = document.querySelectorAll(".has-tooltip");

// function sayHi(){
// this.preventDefault();
//   // console.log("hi");
//
// }

links.forEach((item) => {
  item.addEventListener("click", item.preventDefault())
});
