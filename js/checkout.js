// Exercise 6
function validate() {
  var error = 0;
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var regex = /^[0-9a-zA-Z]+$/;

  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  //Tots son canvis obligatoris i han de tenir mínim 3 caracters

  //El nom i cognoms han de contenir només lletres.
  if (
    fName.value == "" ||
    fName.value.length < 3 ||
    !fName.value.match(letters)
  ) {
    fName.style.borderColor = "red";
    errorName.style.display = "block";
    error++;
  } else {
    fName.style.borderColor = "";
    errorName.style.display = "none";
  }

  // L'email ha de tenir format d'email.
  if (fEmail.value == "" || fEmail.value.length < 3) {
    fEmail.style.borderColor = "red";
    errorEmail.style.display = "block";
    error++;
  } else {
    fEmail.style.borderColor = "";
    errorEmail.style.display = "none";
  }

  //Address
  if (fAddress.value == "" || fAddress.value.length < 3) {
    fAddress.style.borderColor = "red";
    errorAddress.style.display = "block";
    error++;
  } else {
    fAddress.style.borderColor = "";
    errorAddress.style.display = "none";
  }

  //Last Name
  if (fLastN.value == "" || fLastN.value.length < 3) {
    fLastN.style.borderColor = "red";
    errorLastN.style.display = "block";
    error++;
  } else {
    fLastN.style.borderColor = "";
    errorLastN.style.display = "none";
  }

  //La contrasenya ha d'incloure números i lletres. Al html es determina que ha de tenir entre 4-8 caracters
  if (
    fPassword.value == "" ||
    fPassword.value.length < 3 ||
    !fPassword.value.match(regex)
  ) {
    fPassword.style.borderColor = "red";
    errorPassword.style.display = "block";
    error++;
  } else {
    fPassword.style.borderColor = "";
    errorPassword.style.display = "none";
  }

  // El telèfon ha de contenir només números.
  if (
    fPhone.value == "" ||
    fPhone.value.length < 3 ||
    !fPhone.value.match(numbers)
  ) {
    fPhone.style.borderColor = "red";
    errorPhone.style.display = "block";
    error++;
  } else {
    fPhone.style.borderColor = "";
    errorPhone.style.display = "none";
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
