//This te da acceso a las variables del objeto sobre el cual se esta llamando a la funcion tip si ponemos arrow functionm es undefined porque las arrow se ejecutan sobre el entorno global se tendria que llamar antes del objeto como windows.nombre = 'un nombre'

const reservacion = {
    nombre: 'Lisandro',
    apellido: 'Cruzado',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}


console.log(reservacion.informacion());