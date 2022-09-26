window.onload = function() {
  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  var dni = document.getElementById('dni');
  var dateOfBirth = document.getElementById('date-of-birth');
  var phoneNumber = document.getElementById('phone-number');
  var address = document.getElementById('address');
  var location = document.getElementById('location');
  var postalCode = document.getElementById('postal-code');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var repeatPassword = document.getElementById('repeat-password');

  var nameExpression = /^[a-zA-Z]{3,}$/;
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var passwordExpression = /^([a-zA-Z0-9]+)$/;

  function validateFirstName() {
    return nameExpression.test(firstName.value);
  }

  firstName.onblur = function() {
    if (!validateFirstName()) {
      firstName.classList.remove('border', 'correct');
      firstName.classList.add('error');
      document.getElementById('span-first-name').style.visibility = 'visible';
    } else {
      firstName.classList.remove('border','error');
      firstName.classList.add('correct');
      document.getElementById('span-first-name').style.visibility = 'hidden';
    }
  }

  firstName.onfocus = function() {
    document.getElementById('span-first-name').style.visibility = 'hidden';
    if (!validateFirstName()) {
      firstName.classList.remove('correct','error');
      firstName.classList.add('border');
    }
  }







}