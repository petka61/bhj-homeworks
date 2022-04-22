const menu_item = Array.from(document.querySelectorAll('.menu__item'))
const menu_link = Array.from(document.querySelectorAll('.menu__link'))

for (let i in menu_link) {
  menu_link[i].addEventListener("click", function(item) {
    item.preventDefault();
  })
}

for (let i in menu_item) {
  if (menu_item[i].querySelector('.menu_sub')) {
    menu_item[i].querySelector('.menu__link').addEventListener("click", function() {
      const menu_sub = Array.from(document.querySelectorAll('.menu_sub'))
      for (let p in menu_sub) {
        if (menu_sub[p].classList.contains("menu_active")) {
          menu_sub[p].classList.remove("menu_active")
        }
      }
      menu_item[i].querySelector('.menu_sub').classList.toggle("menu_active")
    })
  }
}
