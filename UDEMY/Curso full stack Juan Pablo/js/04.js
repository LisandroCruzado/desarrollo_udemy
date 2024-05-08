//METODOS Y FUNCIONES RELACIONADAS A LOS STRINGS

//String o cadenas de texto
const producto = 'Aprendiendo Javascript'
const producto2 = 'Monitor HD'
let juanchi = 'persona1'
let feli = 'persona2'
let rodri = 'persona3'
let yaki = 'persona4'
const casa = [juanchi, feli, rodri,yaki]

//Length retorna number -> da la cantidad de items que se encuentran dentro de la variable, en el caso del objeto son más variables en caso de strings son caracteres.
console.log(producto.length);
console.log(casa.length);


//IndexOf retorna number -> para saber en que posición del string
console.log(producto.indexOf('Javascript'));


//Includes retorna true o false -> determina si una matriz incluye un determinado elemento.
console.log(producto.includes('Aprendiendo'));