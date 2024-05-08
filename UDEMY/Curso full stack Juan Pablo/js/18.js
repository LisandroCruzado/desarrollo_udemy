function sumar(numero1, numero2){ //numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}

sumar(10,15) //Son argumentos o los valores reales

const sumar2 = function(n1,n2){
    console.log(n1 + n2);
}

sumar2(15,25)


function restar(numero1 = 0, numero2 = 0){ //Parametros por default
    console.log(numero1 + numero2);
}

restar(10)