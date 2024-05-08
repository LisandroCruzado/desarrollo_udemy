const carrito = [
    {nombre: 'Monitor 20"', precio: 2000},
    {nombre: 'Televisor', precio: 5000},
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Tablet', precio: 3000},
]



//ForEach, cuando quieras iterar sobre un array y mostrar elementos en pantalla o consola usa foreach

carrito.forEach(producto => console.log(producto.nombre))

//map, si quieres crear un nuevo arreglo utiliza el map (para sacar algun dato sea nombre o precio o la propiedad que necesites)
const arreglo = carrito.map(producto => `${producto.nombre} - $${producto.precio}`)

console.log(arreglo);
