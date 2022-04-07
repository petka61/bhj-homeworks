const menu_link = document.querySelectorAll('.menu__link')
const menu_sub = Array.from(document.querySelectorAll(".menu_sub"))

menu_link.forEach(item => item.onclick = addMenu)

function addMenu() {
  menu_sub.forEach(item => item.classList.add('menu_active'))
  return false
}
