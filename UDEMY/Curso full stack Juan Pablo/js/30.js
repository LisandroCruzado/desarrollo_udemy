//Promises

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario autenticado') //EL PROMISE SE CUMPLE
    }else{
        reject('No se pudo iniciar sesión') //EL PROMISE NO SE CUMPLE
    }
})

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
//En los Promises éxisten 3 valore posibles
//Pending : No se ha cumplido pero tampoco se a rechazado.
//Fulfilled : Ya se cumplió.
//Rejected : Se ha rechazado o no se pudo cumplir.