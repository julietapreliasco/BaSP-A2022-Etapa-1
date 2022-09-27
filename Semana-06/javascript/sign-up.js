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

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var alpha = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ'
  var alphaNumeric = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ123456789'
  var alphaNumericSpace = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ123456789 '

  // functions

  function validateFirstName() {
    for (var i = 0; i < firstName.value.length; i++) {
      if(!alpha.includes(firstName.value[i])) {
        return false;
      }
    }
    if(firstName.value.length < 4) {
      return false;
    }
    return true;
  }

  function validateLastName() {
    for (var i = 0; i < lastName.value.length; i++) {
      if(!alpha.includes(lastName.value[i])) {
        return false;
      }
    }
    if(lastName.value.length < 4) {
      return false;
    }
    return true;
  }

  function validateDni() {
    if (!isNaN(dni.value) && dni.value.length >= 7) {
      return true;
    }
  }

  // function validateDateOfBirth() {
  //
  // }

  function validatePhoneNumber() {
    if (!isNaN(phoneNumber.value) && phoneNumber.value.length === 10) {
      return true;
    }
  }

  // function validateAddress()

  function validateLocation() {
    for (var i = 0; i < location.value.length; i++) {
      if(!alphaNumericSpace.includes(location.value[i])) {
        return false;
      }
    }
    if(location.value.length < 4) {
      return false;
    }
    return true;
  }

  function validatePostalCode() {
    if (!isNaN(postalCode.value) && postalCode.value.length > 3 && postalCode.value.length < 6 ) {
      return true;
    }
  }

  function validateEmail() {
    return emailExpression.test(email.value);
  }

  function validatePassword() {
    for (var i = 0; i < password.value.length; i++) {
      if(!alphaNumeric.includes(password.value[i])) {
        return false;
      }
    }
    if(password.value.length < 8) {
      return false;
    }
    return true;
  }

  function validateRepeatPassword() {
    if (repeatPassword.value === password.value && repeatPassword.value !== '') {
      return true;
    }
  }

  // FIRST NAME

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

  // LAST NAME

  lastName.onblur = function() {
    if (!validateLastName()) {
      lastName.classList.remove('border', 'correct');
      lastName.classList.add('error');
      document.getElementById('span-last-name').style.visibility = 'visible';
    } else {
        lastName.classList.remove('border','error');
        lastName.classList.add('correct');
        document.getElementById('span-last-name').style.visibility = 'hidden';
    }
  }

  lastName.onfocus = function() {
    document.getElementById('span-last-name').style.visibility = 'hidden';
    if (!validateLastName()) {
      lastName.classList.remove('correct','error');
      lastName.classList.add('border');
    }
  }

  // DNI

  dni.onblur = function() {
    if (!validateDni()) {
      dni.classList.remove('border', 'correct');
      dni.classList.add('error');
      document.getElementById('span-dni').style.visibility = 'visible';
    } else {
        dni.classList.remove('border','error');
        dni.classList.add('correct');
        document.getElementById('span-dni').style.visibility = 'hidden';
    }
  }

  dni.onfocus = function() {
    document.getElementById('span-dni').style.visibility = 'hidden';
    if (!validateDni()) {
      dni.classList.remove('correct','error');
      dni.classList.add('border');
    }
  }

  // PHONE NUMBER

  phoneNumber.onblur = function() {
    if (!validatePhoneNumber()) {
      phoneNumber.classList.remove('border', 'correct');
      phoneNumber.classList.add('error');
      document.getElementById('span-phone-number').style.visibility = 'visible';
    } else {
        phoneNumber.classList.remove('border','error');
        phoneNumber.classList.add('correct');
        document.getElementById('span-phone-number').style.visibility = 'hidden';
    }
  }

  phoneNumber.onfocus = function() {
    document.getElementById('span-phone-number').style.visibility = 'hidden';
    if (!validatePhoneNumber()) {
      phoneNumber.classList.remove('correct','error');
      phoneNumber.classList.add('border');
    }
  }

    //lOCATION

  location.onblur = function() {
    if (!validateLocation()) {
      location.classList.remove('border', 'correct');
      location.classList.add('error');
      document.getElementById('span-location').style.visibility = 'visible';
    } else {
      location.classList.remove('border','error');
      location.classList.add('correct');
      document.getElementById('span-location').style.visibility = 'hidden';
    }
  }

  location.onfocus = function() {
    document.getElementById('span-location').style.visibility = 'hidden';
    if (!validateLocation()) {
      location.classList.remove('correct','error');
      location.classList.add('border');
    }
  }

  // POSTAL CODE

  postalCode.onblur = function() {
    if (!validatePostalCode()) {
      postalCode.classList.remove('border', 'correct');
      postalCode.classList.add('error');
      document.getElementById('span-postal-code').style.visibility = 'visible';
    } else {
        postalCode.classList.remove('border','error');
        postalCode.classList.add('correct');
        document.getElementById('span-postal-code').style.visibility = 'hidden';
    }
  }

  postalCode.onfocus = function() {
    document.getElementById('span-postal-code').style.visibility = 'hidden';
    if (!validatePostalCode()) {
      postalCode.classList.remove('correct','error');
      postalCode.classList.add('border');
    }
  }


  // EMAIL
  email.onblur = function() {
    if (!validateEmail()) {
      email.classList.remove('border', 'correct');
      email.classList.add('error');
      document.getElementById('span-email').style.visibility = 'visible';

    } else {
        email.classList.remove('border','error');
        email.classList.add('correct');
        document.getElementById('span-email').style.visibility = 'hidden';
    }
  }

  email.onfocus = function() {
    document.getElementById('span-email').style.visibility = 'hidden';
    if (!validateEmail()) {
      email.classList.remove('correct','error');
      email.classList.add('border');
    }
  }

  //PASSWORD

  password.onblur = function() {
    if (!validatePassword()) {
      password.classList.remove('border', 'correct');
      password.classList.add('error');
      document.getElementById('span-password').style.visibility = 'visible';
    } else {
        password.classList.remove('border','error');
        password.classList.add('correct');
        document.getElementById('span-password').style.visibility = 'hidden';
    }
  }

  password.onfocus = function() {
    document.getElementById('span-password').style.visibility = 'hidden';
    if (!validatePassword()) {
      password.classList.remove('correct','error');
      password.classList.add('border');
    }
  }

  // REPEAT PASSWORD

  repeatPassword.onblur = function() {
    if (!validateRepeatPassword()) {
      repeatPassword.classList.remove('border', 'correct');
      repeatPassword.classList.add('error');
      document.getElementById('span-repeat-password').style.visibility = 'visible';
  } else {
      repeatPassword.classList.remove('border','error');
      repeatPassword.classList.add('correct');
      document.getElementById('span-repeat-password').style.visibility = 'hidden';
    }
  }

  repeatPassword.onfocus = function() {
    document.getElementById('span-repeat-password').style.visibility = 'hidden';
    if (!validateRepeatPassword()) {
      repeatPassword.classList.remove('correct','error');
      repeatPassword.classList.add('border');
    }
  }
}