window.onload = function() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('button');
  var emailMessage = document.getElementById('message1');
  var passwordMessage = document.getElementById('message2');

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var alphaNumeric = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUWXYZ0123456789';

  function validateEmail() {
    return emailExpression.test(email.value);
  }

  function validatePassword() {
    for (var i = 0; i < password.value.length; i++) {
      if (!alphaNumeric.includes(password.value[i])) {
        return false;
      }
    }
    if (password.value.length < 7) {
      return false;
    }
    return true;
  }

  email.onblur = function() {
    if (!validateEmail()) {
      email.classList.remove('border', 'correct');
      email.classList.add('error');
      emailMessage.style.visibility = 'visible'
    } else {
        email.classList.remove('border','error');
        email.classList.add('correct');
        emailMessage.style.visibility = 'hidden';
    }
  }

  email.onfocus = function() {
    emailMessage.style.visibility = 'hidden'
    email.classList.remove('correct','error');
    email.classList.add('border');
  }

  password.onblur = function() {
    if (!validatePassword()) {
      password.classList.remove('border', 'correct');
      password.classList.add('error');
      passwordMessage.style.visibility = 'visible'
    } else {
        password.classList.remove('border','error');
        password.classList.add('correct');
        passwordMessage.style.visibility = 'hidden'
    }
  }

  password.onfocus = function() {
    passwordMessage.style.visibility = 'hidden'
    password.classList.remove('correct','error');
    password.classList.add('border');
  }

  button.addEventListener('click', function(e) {
    e.preventDefault();
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/' + 'login?email=' + email.value + '&password=' + password.value;
    fetch(url)
      .then(function (response) {
        return(response.json());
      })
      .then(function(data) {
        if(data.success == true) {
          var jsonToString = JSON.stringify(data.msg);
          alert(jsonToString + '\n' + 'Email: ' + email.value + '\n' + 'Password: ' + password.value);
        } else {
            var errorMsg = JSON.stringify(data.errors[0].msg);
            alert(errorMsg);
        }
      })
      .catch(function(error) {
        console.log(error);
      })

  })





}