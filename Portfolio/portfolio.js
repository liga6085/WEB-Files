// filterObjects("all");
//
// function filterObjects(c){
//   var x, i;
//   x =document.getElementByClassName("box");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++){
//     removeClass(x[i], "show");
//     if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//   }
// }
//
// function addClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++){
//     if (arr1.indexOf(arr2[i]) == -1){
//       element.className += " " + arr2[i];
//     }
//   }
// }
//
// function removeClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i= 0; i < arr2.length; i++){
//     while (arr1.indexOf(arr2[i]) > -1){
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
// Second attempt--------------------------------------------------------
// let list = document.querySelectorAll('.list');
// let itemBox = document.querySelectorAll('itemBox');
//
// for(let i = 0; i<list.length; i++){
//   list[i].addEventListener('click', function(){
//     for(let j = 0; j<list.length; j++){
//       list[j].classList.remove('active');
//     }
//     this.classList.add('active');
//
//     let dataFilter = this.getAttribute('data-filter');
//
//     for( let k = 0; k<itemBox.length; k++){
//       itemBox[k].classList.remove('active');
//       itemBox[k].classList.add('hide');
//
//       if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
//         itemBox[k].classList.remove('hide');
//         itemBox[k].classList.add('active');
//       }
//     }
//
//   })
// }
// Third attempt------------------------------------------------------------------------
