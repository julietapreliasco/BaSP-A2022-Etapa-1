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
  var passwordExpression = /^([a-zA-Z0-9]{8,})$/;
  var dniExpression = /^[0-9]{7,}$/;

  function validateFirstName() {
    return nameExpression.test(firstName.value);
  }

  function validateLastName() {
    return nameExpression.test(lastName.value);
  }

  function validateEmail() {
    return emailExpression.test(email.value);
  }

  function validatePassword() {
    return passwordExpression.test(password.value);
  }

  function validateRepeatPassword() {
    if (repeatPassword.value === password.value && repeatPassword.value !== '') {
      return true;
    }
  }

  function validateDni() {
    if (!isNaN(dni.value) && dni.value.length >= 7) {
      return true;
    }
  }

  function validatePhoneNumber() {
    if (!isNaN(phoneNumber.value) && phoneNumber.value.length === 10) {
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