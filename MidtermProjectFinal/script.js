const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('overlay');


for (i=0; i<document.getElementsByClassName('hexagon').length;i++){
 console.log(document.getElementsByClassName('hexagon')[i].id);
 document.getElementsByClassName('hexagon')[i].addEventListener("click", open);
}

var checklist = {
  "Sunday":"<input type='checkbox' name='su1' value='su1'><label for='su1'> Sleep in </label><input type='checkbox' name='su2' value='su2'><label for='su2'> Eat </label><input type='checkbox' name='su3' value='su3'><label for='su3'> Prep bag </label><input type='checkbox' name='su4' value='su4'><label for='su4'> Read </label>",
  "Monday":"<input type='checkbox' name='m1' value='m1'><label for='m1'> Therapy </label><input type='checkbox' name='m2' value='m2'><label for='m2'> Exercise (Core + Legs) </label><input type='checkbox' name='m3' value='m3'><label for='m3'> Shower </label><input type='checkbox' name='m4' value='m4'><label for='m4'> Crochet </label>",
  "Tuesday":"<input type='checkbox' name='tu1' value='tu1'><label for='tu1'> Embroidery </label><input type='checkbox' name='tu2' value='tu2'><label for='tu2'> Ice cream </label><input type='checkbox' name='tu3' value='tu3'><label for='tu3'> Take meds </label>",
  "Wednesday":"<input type='checkbox' name='w1' value='w1'><label for='w1'> Exercise (Arms) </label><input type='checkbox' name='w2' value='w2'><label for='w2'> Shower </label><input type='checkbox' name='w3' value='w3'><label for='w3'> Drawing </label>",
  "Thursday":"<input type='checkbox' name='th1' value='th1'><label for='th1'> Study </label><input type='checkbox' name='th2' value='th2'><label for='th2'> Read </label><input type='checkbox' name='th3' value='th3'><label for='th3'> Ice cream </label>",
  "Friday":"<input type='checkbox' name='f1' value='f1'><label for='f1'> Ice skating </label><input type='checkbox' name='f2' value='f2'><label for='f2'> Shower </label><input type='checkbox' name='f3' value='f3'><label for='f3'> Watch a movie </label>",
  "Saturday":"<input type='checkbox' name='sa1' value='sa1'><label for='sa1'> Get coffee </label><input type='checkbox' name='sa2' value='sa2'><label for='sa2'> Coursework </label><input type='checkbox' name='sa3' value='sa3'><label for='sa3'> Research </label>",
};

function open(e){

  console.log(e.target.id);
  document.getElementById('su-modal').classList.toggle('active');
  document.getElementById('modal-title').innerHTML = "Self Care - " + e.target.id;
  document.getElementById("checklist").innerHTML = "<form>"+ checklist[e.target.id] + "</form>";
  document.getElementById('overlay').classList.toggle('active');
  document.getElementById('overlay').addEventListener('click', close);
}

function close(e){
  if(e.target.id == "overlay" || e.target.id == "close"){
  document.getElementById('su-modal').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}
}

// function open(e){
//   console.log(e.target.id);
//   document.getElementById('m-modal').classList.toggle('active');
//   document.getElementById('overlay').classList.toggle('active');
//   document.getElementById('overlay').addEventListener('click', close);
// }
//
// function close(e){
//   if(e.target.id == "overlay" || e.target.id == "close"){
//   document.getElementById('m-modal').classList.toggle('active');
//   document.getElementById('overlay').classList.toggle('active');
// }
// }



// ----------------------------------------------------------------------------
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
