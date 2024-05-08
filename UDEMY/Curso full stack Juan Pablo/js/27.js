//POO
//Object Literal
const producto = {
    nombre: 'Table',
    precio: 500
}

//Object constructor
function Cliente(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

//Crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`
}

const cliente = new Cliente('Lisandro', 'Cruzado')
console.log(cliente.formatearCliente());


function Producto(nombre, precio, stock, caracteristicas) { //<--- Parametros
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.caracteristicas = caracteristicas
}

//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

//Instancias
const producto2 = new Producto('Monitor ', 800, true, 'Curvo 49') //<----Argumentos
const producto3 = new Producto('Laptop', 1200, false, '8gb de RAM')



console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


