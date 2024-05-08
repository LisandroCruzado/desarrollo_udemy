//Clases

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

    obtenerPrecio(){
        console.log(this.precio);
    }
}

const producto = new Producto('Televisor', 500000)
console.log(producto.formatearProducto());




//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }

    obtenerPrecio(){
        super.obtenerPrecio()
        console.log('Si hay en éxistencia');
    }
}

const libro = new Libro('Javascript La revolucion', 20000, '38217398')
console.log(libro.obtenerPrecio());