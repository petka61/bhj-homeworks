const incButton =  Array.from(document.querySelectorAll(".product__quantity-control_inc"))
const decButton = document.querySelectorAll(".product__quantity-control_dec")

console.log(incButton)
incButton.forEach(item =>
  item.addEventListener("click", console.log("hi")));
