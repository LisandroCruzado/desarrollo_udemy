const metodoPago = 'bitcoin'

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break
    case 'cheque':
        console.log('El usuario va a pagar con cheque revisaremos primero');
        break
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break
    default:
        console.log('Aun no has pagado');
        break
}