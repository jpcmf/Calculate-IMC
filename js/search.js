// search.js
// search pacients with ajax

var btnSearch = document.querySelector("#buscar-pacientes");
// console.log(btnSearch);

btnSearch.addEventListener("click", function() {

  // $.ajax("https://api-pacientes.herokuapp.com/pacientes") {
  //   success: function() {
  //
  //   },
  //   error: functon() {
  //
  //   }
  // }

  //object js request http
  var xhr = new XMLHttpRequest();

  //open connection with api
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess");
  // console.log(xhr);

  //add event listener load and return json
  xhr.addEventListener("load", function() {
    // console.log(xhr.responseText);

    var errorAjax = document.querySelector("#error-ajax")

    //status 200 positive
    if(xhr.status == 200) {

      errorAjax.classList.add("invisible");

      var response = xhr.responseText;
      // console.log(response);
      // console.log(typeof response);

      var pacients = JSON.parse(response);
      // console.log(pacients);
      // console.log(typeof pacients);

      // for (var i = 0; i < pacients.length; i++) {
      //   var pacient = pacients[i];
      //   addPacientTable(pacient);
      // }

      pacients.forEach(function(pacient) {
        addPacientTable(pacient);
      });

    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      errorAjax.classList.remove("invisible");
    }

  });

  xhr.send();

});
