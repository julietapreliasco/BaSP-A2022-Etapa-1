console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array:
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('\n-Exercise 3.a:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months[4], months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('\n-Exercise 3.b:');

var months1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var sortedArray = months1.sort();
console.log(sortedArray);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('\n-Exercise 3.c:');

var months2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

months2.unshift('Hello');
months2.push('Bye');

console.log(months2);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log('\n-Exercise 3.d:');

var months3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

months3.pop();
months3.shift();

console.log(months3);

/* e. Invertir el orden del array (utilizar reverse).*/

console.log('\n-Exercise 3.e:');

var months4 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var reverseMonths = months4.reverse();

console.log(reverseMonths);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

console.log('\n-Exercise 3.f:');

var months5 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var joinedMonths = months5.join('-');

console.log(joinedMonths);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('\n-Exercise 3.g:');

var months6 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var slicedMonths = months6.slice(4, 11);

console.log(slicedMonths);