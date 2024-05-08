//Async / await
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando lista de clientes, espere');

        setTimeout(() => {
            resolve('Los clientes fueron Descargados')
        },1000)
    })
}


function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos, espere');

        setTimeout(() => {
            resolve('Los pedidos fueron Descargados')
        },1000)
    })
}



async function app() {
        try {
            // const clientes = await descargarNuevosClientes()
            // const pedidos = await descargarUltimosPedidos()
            // console.log(clientes);//Log para ver en consola que devuelve la promesa
            // console.log(pedidos);//Log para ver en consola que devuelve la promesa

            //Optimizando async await a tener en cuenta que la función devuelve un array
            const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
            console.log(resultado[0]);
            console.log(resultado[1]);
            
            
            //await pongo a la espera la promesa hasta que llegue el resultado
            
        } catch (error) {
            console.log(error);
    }
}


app()
