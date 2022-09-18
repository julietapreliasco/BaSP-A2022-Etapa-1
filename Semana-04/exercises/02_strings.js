console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres,
// convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('\n-Exercise 2.a:');

var string = 'lorem ipsum dolor sit amet';
var upperCaseString = string.toUpperCase();

console.log(upperCaseString);

// b. Crear una variable de tipo string con al menos 10 caracteres
// generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b:');

var myString ='lorem ipsum dolor sit amet';
var mySubstring = myString.substring(0,5);

console.log(mySubstring);

// c. Crear una variable de tipo string con al menos 10 caracteres
// generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c:');

var mySecondString = 'lorem ipsum dolor sit amet';
var lastThree = mySecondString.substring(mySecondString.length -3);

console.log(lastThree);

// d. Crear una variable de tipo string con al menos 10 caracteres
// generar un nuevo string con la primera letra en mayúscula y las demás en minúscula
// guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('\n-Exercise 2.d:');

var loremPhrase = 'lorem ipsum dolor sit amet';
var result = loremPhrase.substring(0,1).toUpperCase() + loremPhrase.substring(1, loremPhrase.length).toLowerCase();

console.log(result);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n-Exercise 2.e:');

var text = 'sed ullamcorper vehicula nisi';
var spacing = text.indexOf(' ');

console.log(spacing);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
// las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('\n-Exercise 2.f:');

var secondText = 'phasellus condimentum';
var modifiedText1 = secondText.substring(0,1).toUpperCase() + secondText.substring(1, secondText.indexOf(' ')).toLowerCase();
var modifiedText2 = secondText.substring(secondText.indexOf(' ')+1, secondText.indexOf(' ')+2).toUpperCase() +
secondText.substring(secondText.indexOf(' ')+2, secondText.length).toLowerCase();

finalModification = modifiedText1 + ' ' + modifiedText2;
console.log(finalModification);