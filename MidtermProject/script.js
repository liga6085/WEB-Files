const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('overlay');


for (i=0; i<document.getElementsByClassName('hexagon').length;i++){
 console.log(document.getElementsByClassName('hexagon')[i].id);
 document.getElementsByClassName('hexagon')[i].addEventListener("click", open);
}

function open(e){
  console.log(e.target.id);
  document.getElementById('modal').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
  document.getElementById('overlay').addEventListener('click', close);
}

function close(e){
  if(e.target.id == "overlay" || e.target.id == "close"){
  document.getElementById('modal').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}
}
// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal);
//   })
// })
//
// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal');
//     closeModal(modal);
//   })
// })
//
// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }
//
// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
