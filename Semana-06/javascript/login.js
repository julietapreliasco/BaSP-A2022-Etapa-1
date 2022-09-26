window.onload = function() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var button = document.getElementById('button');
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
    } else {
        email.classList.remove('border','error');
        email.classList.add('correct');
    }
  }

  email.onfocus = function() {
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
    } else {
        password.classList.remove('border','error');
        password.classList.add('correct');
    }
  }

  password.onfocus = function() {
    if (validatePassword() == false) {
      password.value = '';
    }
  }

  button.addEventListener('click', function(e) {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      alert('Email: ' + email.value + 'Password: ' + password.value);
    } else if (!validateEmail() && validatePassword()){
        alert('Email is not valid')
    } else if (validateEmail() && !validatePassword()) {
        alert('Password is not valid')
    } else {
        alert('Email and password not valid')
    }
  })
}