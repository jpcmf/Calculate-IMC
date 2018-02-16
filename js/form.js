// form.js
// insert new pacient values

//create var button
var btnAdd = document.querySelector("#adicionar-paciente");

//add click to button and do something with anonymous function
btnAdd.addEventListener("click", function() {
  event.preventDefault();

  //create var form
  var form = document.querySelector("#addForm");

  //extract infos from pacient in form
  var pacient = getFormInfos(form);

  //adding pacient in form
  var pacientTr = constructTr(pacient);

  //create var erros
  var errors = pacientValidate(pacient);
  console.log(errors);

  //validate if erros is true
  if(errors.length > 0) {
    showMessageError(errors);
    return;
  }

  //adding pacient in the table
  var table = document.querySelector("#tabela-pacientes");

  table.appendChild(pacientTr);

  //clear all fields of form
  form.reset();

  //clear ul after insert new pacient
  var messageError = document.querySelector("#error-messages");
  messageError.innerHTML = "";

});

//function extract infos from pacient in form
function getFormInfos(form) {

  var pacient = {
    name: form.nome.value,
    weight: form.peso.value,
    height: form.altura.value,
    fat: form.gordura.value,
    imc: calculateImc(form.peso.value, form.altura.value)
  }

  return pacient;
}

//function construct tr
function constructTr(pacient) {

  //create var for tr and create element
  var pacientTr = document.createElement("tr");
  pacientTr.classList.add("paciente");

  //create var for td for each value using function constructTd
  // var nameTd = constructTd(pacient.name, "info-nome");
  // var weightTd = constructTd(pacient.weight, "info-peso");
  // var heightTd = constructTd(pacient.height, "info-altura");
  // var fatTd = constructTd(pacient.fat, "info-gordura");
  // var imcTd = constructTd(pacient.imc, "info-imc");

  //insert values of td in tr
  pacientTr.appendChild(constructTd(pacient.name, "info-nome"));
  pacientTr.appendChild(constructTd(pacient.weight, "info-peso"));
  pacientTr.appendChild(constructTd(pacient.height, "info-altura"));
  pacientTr.appendChild(constructTd(pacient.fat, "info-gordura"));
  pacientTr.appendChild(constructTd(pacient.imc, "info-imc"));

  return pacientTr;
}

//function construct td
function constructTd(data, classe) {
  //create var for td and create element
  var td = document.createElement("td");

  //parameter data as value of textContent
  td.textContent = data;

  //parameter classe as value of classList
  td.classList.add(classe);

  return td;
}

//function show errors
function showMessageError(errors) {

  //create ul var
  var ul = document.querySelector("#error-messages");
  ul.innerHTML = "";

  //for each li add error message
  errors.forEach(function(error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}

//function validate pacient
function pacientValidate(pacient) {

  //array erros
  var errors = [];

  if(pacient.name.length == 0) {
    errors.push("Name can not be blank.");
  }

  if(!validateWeight(pacient.weight)) {
    // return "";
    errors.push("Invalid weight!");
  }

  if(!validateHeight(pacient.height)) {
    errors.push("Invalid height!");
  }

  if(pacient.fat.length == 0) {
    errors.push("Fat can not be blank.");
  }

  if(pacient.weight.length == 0) {
    errors.push("Weight can not be blank.");
  }

  if(pacient.height.length == 0) {
    errors.push("Height can not be blank.");
  }

  return errors;
}
