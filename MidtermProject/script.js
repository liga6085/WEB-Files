// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')
//
// open.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })
//
// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('modal.active')
//   modals.forEach(modal)
//   closeModal(modal)
// })
//
// close.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
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

const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);
