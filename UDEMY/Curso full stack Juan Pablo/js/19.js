// function sumar(n1,n2){
//     return n1 + n2
// }

// const resultado = sumar(2,3)
// console.log(resultado);

let total = 0

function agregarCarrito(precio){
    return total += precio
}

function calcularImpuesto(total){
    return 1.21 * total
}

total = agregarCarrito(200)
total = agregarCarrito(500)
total = agregarCarrito(1200)

const totalAPagar = calcularImpuesto(total)

console.log(`Su total a pagar con impuestos es de: $${totalAPagar}`)