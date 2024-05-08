//Objetos


const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio : 300,
    disponible : true
}


// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);

// console.log(producto['precio']);


// Para agregar propiedades
producto.imagen = 'imagen.jpg'

// Para eliminar propiedades
delete producto.disponible

console.log(producto);