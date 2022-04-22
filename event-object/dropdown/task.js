const dropdown_value = document.querySelector(".dropdown__value");
const dropdown_list = document.querySelector(".dropdown__list")
const dropdown_item = Array.from(document.querySelectorAll(".dropdown__item"))

const changeLanguage = function() {
  dropdown_list.classList.add("dropdown__list_active")
}
dropdown_value.addEventListener("click", changeLanguage)

dropdown_item.forEach(item => item.addEventListener('click', function() {
  dropdown_value.textContent = this.textContent;
  dropdown_list.classList.remove("dropdown__list_active")
  event.preventDefault()
}))
