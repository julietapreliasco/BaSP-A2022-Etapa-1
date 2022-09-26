window.onload = function() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('button');
  var emailMessage = document.getElementById('message1');
  var passwordMessage = document.getElementById('message2');
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var passwordExpression = /^([a-zA-Z0-9]+)$/

  function validateEmail() {
    return emailExpression.test(email.value);
  }

  function validatePassword() {
    return passwordExpression.test(password.value);
  }

  email.onblur = function() {
    if (validateEmail() == false) {
      email.classList.remove('border', 'correct');
      email.classList.add('error');
      emailMessage.style.visibility = 'visible'
    } else {
        email.classList.remove('border','error');
        email.classList.add('correct');
        emailMessage.style.visibility = 'hidden'
    }
  }

  email.onfocus = function() {
    emailMessage.style.visibility = 'hidden'
    if (validateEmail() == false) {
      email.value = '';
    }
    if (email.value = '') {
      email.classList.remove('correct','error');
        email.classList.add('border');
    }
  }

  password.onblur = function() {
    if (validatePassword() == false) {
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
    if (validatePassword() == false) {
      password.value = '';
    }
  }

  button.addEventListener('click', function(e) {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      alert('Email: ' + email.value + '\nPassword: ' + password.value);
    } else if (!validateEmail() && validatePassword()){
        alert('Email is not valid')
    } else if (validateEmail() && !validatePassword()) {
        alert('Password is not valid')
    } else {
        alert('Email and password not valid')
    }
  })
}