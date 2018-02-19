// remove.js
// delete pacient with double click

//create pacients var
var pacients = document.querySelectorAll('.paciente');
// console.log(pacients);

//create table var
var table = document.querySelector("#tabela-pacientes");

//use double click event
table.addEventListener("dblclick", function(event) {
  // console.log(event.target);

  //add class to add fade effect
  event.target.parentNode.classList.add("fade-out");

  setTimeout(function() {
    //remove using event.target
    //use parentNode to remove TR
    event.target.parentNode.remove();
  }, 500);

});


//for each pacient remove with double click
//this method don't work when add new pacient
//because the js has loaded first

// pacients.forEach(function(pacient) {
//   pacient.addEventListener("dblclick", function() {
//       console.log('clicked!');
//
//       this.remove();
//   });
// });
