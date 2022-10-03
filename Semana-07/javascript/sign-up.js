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
  var button = document.getElementById('create-button');

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var alpha = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  var numeric = '0123456789';
  var alphaNumeric = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';
  var alphaNumericSpace = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ';

  function validateFirstName() {
    for (var i = 0; i < firstName.value.length; i++) {
      if (!alpha.includes(firstName.value[i])) {
        return false;
      }
    }
    if (firstName.value.length < 4) {
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
    if (lastName.value.length < 4) {
      return false;
    }
    return true;
  }

  function validateDni() {
    if (!isNaN(dni.value) && dni.value.length >= 7) {
      return true;
    }
  }

  function validateDateOfBirth() {
    if (dateOfBirth.value !== '') {
      return true;
    }
  }

  function validatePhoneNumber() {
    if (!isNaN(phoneNumber.value) && phoneNumber.value.length === 10) {
      return true;
    }
  }

  function validateAddress() {
    var alphaArray = []
    var numArray = []

    for (var i = 0; i < address.value.length; i++) {
      if (!alphaNumericSpace.includes(address.value[i])) {
        return false;
      }

      if (numeric.includes(address.value[i])) {
        numArray.push[address.value[i]];
      }

      if (alpha.includes(address.value[i])) {
        alphaArray.push[address.value[i]];
      }
    }
    if (address.value.length < 5) {
      return false;
    }

    if (alphaArray === 0 || alphaNumeric === 0) {
      return false;
    }

    var splitedAddress = address.value.split(' ');
    if (!splitedAddress[0] || !splitedAddress[1]) {
      return false;
    }
    return true;
  }

  function validateLocation() {
    for (var i = 0; i < location.value.length; i++) {
      if (!alphaNumericSpace.includes(location.value[i])) {
        return false;
      }
    }
    if (location.value.length < 4) {
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
      if (!alphaNumeric.includes(password.value[i])) {
        return false;
      }
    }
    if (password.value.length < 8) {
      return false;
    }
    return true;
  }

  function validateRepeatPassword() {
    if (repeatPassword.value === password.value && repeatPassword.value !== '') {
      return true;
    }
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
    firstName.classList.remove('correct','error');
    firstName.classList.add('border');
  }

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
    lastName.classList.remove('correct','error');
    lastName.classList.add('border');
  }

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
    dni.classList.remove('correct','error');
    dni.classList.add('border');
  }

  dateOfBirth.onblur = function() {
    if (!validateDateOfBirth()) {
      dateOfBirth.classList.remove('border', 'correct');
      dateOfBirth.classList.add('error');
      document.getElementById('span-date').style.visibility = 'visible';
    } else {
        dateOfBirth.classList.remove('border','error');
        dateOfBirth.classList.add('correct');
        document.getElementById('span-date').style.visibility = 'hidden';
    }
  }

  dateOfBirth.onfocus = function() {
    document.getElementById('span-date').style.visibility = 'hidden';
    dateOfBirth.classList.remove('correct','error');
    dateOfBirth.classList.add('border');
  }

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
    phoneNumber.classList.remove('correct','error');
    phoneNumber.classList.add('border');
  }

  address.onblur = function() {
    if (!validateAddress()) {
      address.classList.remove('border', 'correct');
      address.classList.add('error');
      document.getElementById('span-address').style.visibility = 'visible';
    } else {
        address.classList.remove('border','error');
        address.classList.add('correct');
        document.getElementById('span-address').style.visibility = 'hidden';
    }
  }

  address.onfocus = function() {
    document.getElementById('span-address').style.visibility = 'hidden';
    address.classList.remove('correct','error');
    address.classList.add('border');
  }

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
    location.classList.remove('correct','error');
    location.classList.add('border');
  }

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
    postalCode.classList.remove('correct','error');
    postalCode.classList.add('border');
  }

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
    email.classList.remove('correct','error');
    email.classList.add('border');
  }

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
    password.classList.remove('correct','error');
    password.classList.add('border');
  }

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
    repeatPassword.classList.remove('correct','error');
    repeatPassword.classList.add('border');
  }


  button.addEventListener('click', function(e) {
    e.preventDefault();

    var dateOfBirthValue = dateOfBirth.value
    var yyyy = dateOfBirth.value.substring(0,4);
    var mm = dateOfBirth.value.substring(5,7);
    var dd = dateOfBirth.value.substring(8,10);
    dateOfBirthValue = mm + '/' + dd + '/' + yyyy;

    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' + '?name=' + firstName.value + '&lastName='
    + lastName.value + '&dni=' + dni.value + '&dob=' + dateOfBirthValue + '&phone=' + phoneNumber.value +
    '&address=' + address.value + '&city=' + location.value + '&zip=' + postalCode.value + '&email=' +
    email.value + '&password=' + password.value

    var alertValues = 'Name: '+ firstName.value + '\n' + 'Last Name: '+ lastName.value + '\n' + 'DNI: '+ dni.value + '\n'+
    'Date of Birth: '+ dateOfBirthValue + '\n' + 'Phone: '+ phoneNumber.value + '\n'+ 'Address: ' + address.value + '\n' +
    'Location: ' + location.value + '\n' + 'Postal Code: ' + postalCode.value + '\n' + 'Email: ' + email.value + '\n' +
    'Password: ' + password.value;

    fetch(url)
      .then(function(response) {
        return(response.json());
      })
      .then(function(data) {
        if (data.success == true) {
          var dataToString = JSON.stringify(data.msg);
          alert(dataToString + '\n' + alertValues)
        } else {
            var errroMsg = []
            for (var i = 0; i < data.errors.length; i++) {
              errroMsg.push(data.errors[i].msg);
            }
            alert(errroMsg.join('\n'));
        }
      })
      .catch(function(error) {
        console.log(error)
      })


    localStorage.setItem('name')
  })
}