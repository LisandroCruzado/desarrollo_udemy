const puntaje = 999

// if (puntaje == 1000) {
//     console.log('El puntaje es 1000');
// } else {
//     console.log('El puntaje es menor');
// }

const rol = 'ADMINISTRADOR'

if (rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres editor puedes entrar');
} else {
    console.log('No tienes acceso');
}