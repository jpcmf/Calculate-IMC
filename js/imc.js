// imc.js

// var title = document.querySelector(".title");
// title.textContent = "Aparecida Nutricionista!";

//add click to button and do something with named function
// title.addEventListener("click", showMessage);

//named function
// function showMessage() {
//   console.log("Hello, clicked!");
// }

//caculate the IMC

//select first pacient tr (querySelector select one)
// var pacient = document.querySelector("#first-pacient");

//select all pacients tr (querySelector select all in array)
var pacients = document.querySelectorAll(".paciente");
// console.log(pacients);

//loop all pacients
for(var i = 0; i < pacients.length; i++) {

  //print all pacients index
  // console.log(pacients[i]);

  //pacient on index i
  var pacient = pacients[i];

  //select td weight
  var tdWeight = pacient.querySelector(".info-peso");
  //create weight var
  var weight = tdWeight.textContent;

  //select td height
  var tdHeight = pacient.querySelector(".info-altura");
  //create height var
  var height = tdHeight.textContent;

  //select td imc
  var tdImc = pacient.querySelector(".info-imc");

  //create valid weight/height var
  var validWeight = validateWeight(weight); //true or false
  var validHeight = validateHeight(height); //true or false

  //validate weight = false
  if(!validWeight) {
    console.log("Invalid weight!");
    validWeight = false;
    tdImc.textContent = "Invalid weight!";

    //change font color and background when get error
    // pacient.style.color = "white";
    // pacient.style.backgroundColor = "lightcoral";

    //add class error
    pacient.classList.add("invalid-pacient");
  }

  //validate height = false
  if(!validHeight) {
    console.log("Invalid height!");
    validHeight = false;
    tdImc.textContent = "Invalid height!";

    //change font color and background when get error
    // pacient.style.color = "white";
    // pacient.style.backgroundColor = "lightcoral";

    //add class error
    pacient.classList.add("invalid-pacient");
  }

  //validate if weight / height is valid = true
  if(validWeight && validHeight) {

    //calculate imc
    var imc = calculateImc(weight, height);

    //result of imc in td imc
    tdImc.textContent = imc;

    console.log(imc);
  }
}

//create function validate weight
function validateWeight(weight) {
  if(weight >= 0 && weight < 1000) {
    return true;
  } else {
    return false;
  }
}

//create function validate height
function validateHeight(height) {
  if(height >= 0 && height <= 3.00) {
    return true;
  } else {
    return false;
  }
}

//create function to calcute imc in other files
function calculateImc(weight, height) {
  //set imc value
  var imc = 0;

  //calcute IMC
  imc = weight / (height * height); // 100 / 2.0 * 2.0 = 100 / 4 >>> 25

  //return the value using toFixed set 2 numbers after .
  return imc.toFixed(2);
}
