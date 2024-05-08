const numero1 = 20
const numero3 = 30

console.log(numero1);


try {
    console.log(numero2);
    
} catch (error) {
    console.log(error);
}
console.log(numero3);


//Utilizar donde sea critico para que la aplicacion no deje de funcionar y muestra un mensaje de error, por ejemplo conectividad con una BD, o error en la contraseña, o error al efectuarse el pago