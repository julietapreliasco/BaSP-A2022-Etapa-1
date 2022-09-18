console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

console.log('\n-Exercise 1.a:');

var num1 = 10;
var num2 = 14;

var sum = num1 + num2;
console.log(sum);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('\n-Exercise 1.b:');

var firstString = 'Hello';
var secondString = 'world';

var phrase = firstString + ' ' + secondString;
console.log(phrase);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('\n-Exercise 1.c:');

var firstLength = 'Hi';
var secondLength = 'everybody';

var fullLength = firstLength.length + secondLength.length;
console.log(fullLength);
