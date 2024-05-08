// 'use strict' //Correr JS en modo estricto
//Objeto
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio : 300,
    disponible : true
}

// Object.freeze(producto) // No te permite agregar nuevas propiedades o eliminar ni modificar éxistentes

Object.seal(producto)// No te permite agregar nuevas propiedades o eliminar pero si modificar éxistentes

producto.imagen = 'foto.jpg' //intentamos agregar propiedad nueva a un producto sellado y nos da error


console.log(Object.isFrozen(producto));

console.log(producto);