//Arrow functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5,10)


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('Javascript')


const meses = ['Entero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    {nombre: 'Monitor 20"', precio: 2000},
    {nombre: 'Televisor', precio: 5000},
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Tablet', precio: 3000},
]

//forEach
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo existee');
    }
})

let resultado

//Some ideal para arrays de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular PRO')

//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)

//Filter
resultado = carrito.filter(producto => producto.nombre != 'Televisor')
resultado = carrito.filter(producto => producto.nombre != 'Celular')

console.log(resultado);
