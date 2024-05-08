//Arreglos o Arrays

const numeros = [10,20,30,50]


const meses = ['Entero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

console.table(meses);


// const arreglo = [213, 'Hola', true, false, ['mas','arreglos']]

// console.table(arreglo)

// Acceder a los valores de los arreglos

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);

// Concer la extension de un arreglo
// console.log(meses.length);


// meses.forEach(function(mes){
//     console.log(mes);}
// )

//Estructura de datos

numeros.push(60,80) //Agrega al final del arreglo

numeros.unshift(-10,-20-30) //Agrega al inicio del arreglo

meses.pop() //Elimina el item del final del arreglo
meses.shift() //Elimina el primer item del arreglo
meses.splice(2, 1) //Elimina 1 item despues de la posición 2 del array

console.table(numeros);
console.table(meses);

//Rest operator o Spread operator

//const nuevoArreglo = [...meses, 'Junio'] //Genera un nuevo arreglo mantiene buenas practicas

// O si quiero ponerlo al inificio 
const nuevoArreglo = [ 'Junio',...meses,]

console.log(nuevoArreglo);

