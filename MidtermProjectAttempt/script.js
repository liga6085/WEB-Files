// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button');
// const overlay = document.getElementById('overlay');

let hexagon = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


for (i=0; i<document.getElementsByClassName('hexagon').length;i++){
 console.log(document.getElementsByClassName('hexagon')[i].id);
 document.getElementsByClassName('hexagon')[i].addEventListener("click", open, false);
 document.getElementsByClassName('hexagon')[i].id = hexagon[i];
}

function open(e){
  console.log(e.target.id);
  // document.getElementById('su-modal').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
  document.getElementById('overlay').addEventListener('click', close);

  if(e.target.tagName == "H1"){
    console.log("h1 clicked");
    e.target.classList.toggle('active');
  }
  else{
    console.log("div clicked");
    e.target.classList.toggle('active');
  }
}

function close(e){
  if(e.target.id == "overlay" || e.target.id == "close"){
  document.getElementById('su-modal').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}
}
// ------------------------------------------------------------------
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
