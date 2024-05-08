//Array methods

const meses = ['Entero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    {nombre: 'Monitor 20"', precio: 2000},
    {nombre: 'Televisor', precio: 5000},
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Tablet', precio: 3000},
]


//forEach
// meses.forEach(function(mes) {
//     if(mes == 'Marzo'){
//         console.log('Marzo existee');
//     }
// })

//Includes ideal para un arreglo plano
let resultado = meses.includes('Marzo')

//Some ideal si tiene objetos
resultado = carrito.some(producto => producto.nombre === 'Celular')

//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)


//Filter
resultado = carrito.filter(function(producto){
    return producto.nombre === 'Celular'
})
console.log(resultado);
