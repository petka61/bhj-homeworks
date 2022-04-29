const modal = document.querySelector('.modal')
modal.classList.add('modal_active');

const modalClose = document.querySelectorAll('div.modal__close')

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", function() {
    let closest = this.closest(".modal")
    closest.classList.toggle("modal_active")
  })
}

const success = document.getElementById('modal_success');
const btn = document.querySelector('.show-success')

btn.onclick = function() {
  success.classList.add('modal_active');
  modal.classList.remove('modal_active');
}
