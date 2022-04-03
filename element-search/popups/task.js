const modal = document.getElementById('modal_main');
modal.classList.add('modal_active');

const success = document.getElementById('modal_success');

function closePopUp(){
  return modal.classList.remove('modal_active'),
  success.classList.remove('modal_active');
}

function changeButton() {
   return success.classList.add('modal_active');
}
