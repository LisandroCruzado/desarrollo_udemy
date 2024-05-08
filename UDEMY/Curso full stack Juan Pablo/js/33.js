async function obtenerEmpleados(){
    const archivo = 'empleados.json'
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos; //Con destructuring extraigo el valor y creo variable


    //     })
    const resultado = await fetch(archivo)
    const datos = await resultado.json()
    console.log(datos);
}
obtenerEmpleados()