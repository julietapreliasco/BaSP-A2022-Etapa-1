console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador. */

console.log('\n-Exercise 6.a:');

function sum (a, b) {
  return a + b;
}

var mySum  = sum(10, 5);

console.log(mySum);

/* b. A la función suma anterior,
agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('\n-Exercise 6.b:');

function sum2 (a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert('Error, number required');
    return NaN;
  } else {
      return a + b;
  }
}

var result = sum2('z', 10);

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/

console.log('\n-Exercise 6.c:');

function validateInteger(a) {
  if (Number.isInteger(a)) {
    return true;
  } else {
      return false;
  }
}

var number = validateInteger(2.5);
console.log(number);

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).*/

console.log('\n-Exercise 6.d:');

function sum3(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('Error, number required');
    return NaN;

  } else if ((!validateInteger(a)) && (!validateInteger(b))) {
      alert('Error, not integers');
      return [Math.round(a), Math.round(b)];

  } else if (!validateInteger(a)) {
      alert('Error, not an integer');
      return Math.round(a);

  } else if (!validateInteger(b)){
      alert('Error, not an integer');
      return Math.round(b);
  } else {
      return a + b;
  }
}

var result = sum3(10.6, 11.8);
console.log(result);



/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

console.log('\n-Exercise 6.e:');

function newValidateInteger (a, b) {
  if ((!validateInteger(a)) && (!validateInteger(b))) {
    alert('Error, not integers');
    return [Math.round(a), Math.round(b)];

  } else if (!validateInteger(a)) {
      alert('Error, not an integer');
      return Math.round(a);

  } else if (!validateInteger(b)) {
      alert('Error, not an integer');
      return Math.round(b);
  }
}

function sum4(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('Error, number required');
    return NaN;
  } else if (newValidateInteger(a, b)) {
      return(newValidateInteger(a, b));
  } else {
      return a + b;
  }
}

var myResult1 = sum4(5.6, 2);
console.log(myResult1);

var myResult2 = sum4(5, 2);
console.log(myResult2);

var myResult3 = sum4('o', 2);
console.log(myResult3);
