const menuLink = Array.from(document.querySelectorAll('.menu__link'))
const aaa = Array.from(document.querySelectorAll('.menu_sub'))

aaa.forEach(item => {
  item.previousElementSibling.onclick = function(event) {
    if (item.classList.contains('menu_active')) {
      item.classList.remove('menu_active');
      // return false;
    } else if (document.querySelector('.menu_active') === null) {
      item.classList.add('menu_active')
    } else {
      document.querySelector('.menu_active').classList.remove('menu_active');
    }
    if (item) {
      item.classList.add('menu_active');
    }
    event.preventDefault();
  }
})
