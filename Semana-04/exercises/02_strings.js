console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('\n-Exercise 2.a:');

var string = 'Lorem ipsum dolor sit amet';
var upperCaseString = string.toUpperCase();

console.log(upperCaseString);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b:');

var myString ='Lorem ipsum dolor sit amet';
var mySubstring = myString.substring(0,5);

console.log(mySubstring);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c:');

var mySecondString = 'Lorem ipsum dolor sit amet';
var lastThree = mySecondString.substring(mySecondString.length -3);

console.log(lastThree);