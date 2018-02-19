// filter.js
// filter the name of pacients

//create var for input filter
var filterInput = document.querySelector("#filter-table");
// console.log(filterInput);


//add event when user is typing on input
filterInput.addEventListener("input", function() {
  // console.log(this.value);

  //create var for all pacients
  var pacients = document.querySelectorAll(".paciente");
  // console.log(pacients);

  if(this.value.length > 0) {

    for (var i = 0; i < pacients.length; i++) {
      var pacient = pacients[i];
      var tdName = pacient.querySelector(".info-nome");
      var name = tdName.textContent;
      var express = new RegExp(this.value, "i"); //create regular expression
      if(!express.test(name)) { //validate regular expression
        pacient.classList.add("invisible");
      } else {
        pacient.classList.remove("invisible");
      }
    }
  } else {
    for (var i = 0; i < pacients.length; i++) {
      var pacient = pacients[i];
      pacient.classList.remove("invisible");
    }
  }

});
