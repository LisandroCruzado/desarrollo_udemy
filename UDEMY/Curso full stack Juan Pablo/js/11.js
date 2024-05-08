//Objetos
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio : 300,
    disponible : true
}


// const precioProducto = producto.precio
// const nombreProducto = producto.nombreProducto

// console.log(nombreProducto);


//Destructuring
//Es una sintaxis más clara y más corta. Transforma la propiedad del objeto en una variable

const { precio, nombreProducto } = producto;
console.log(nombreProducto, precio);