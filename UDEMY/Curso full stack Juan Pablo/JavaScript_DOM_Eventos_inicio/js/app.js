//querySelector retorna 0 o 1 elemento
const heading = document.querySelector('.header__texto h2')
heading.textContent = 'ta taaaaaaaaa'
// console.log(heading);

//querySelectorAll retorna 0 o todos los elementos que concuerden con el selector tipo css
const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces[0]);
// enlaces[0].textContent = 'Nuevo texto para enlace'


//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'
//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace'
//Agregar enlace
nuevoEnlace.classList.add('navegacion__enlace')
//Agregarlo al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace) //Agrego mi variable que contiene html, como hijo a la etiqueta que contiene la clase .navegacion


//Eventos

// console.log(1);

// window.addEventListener('load', imprimir ) //el callback de function se ejecuta cuando load esta listo, ( 'load 'espera que el JS y los archivos que depende del HTML estén listos) 

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4); //Diferencia entre LOAD espera que se descargue el html, las imagenes, el css, todos los documentos... En Domcontent loaded solo espera que se descargue el HTML pero no espera CSS e IMAGNES.
// })

// console.log(5);

// function imprimir(){
//     console.log(2);
// }


//Seleccionar elementos y asociarles un evento (el click esta asociado al botón, imagenes textos un boton que no sea el de un formulario preferentemente)

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault()
//     //Validar formulario
//     console.log('enviando formulario');
// })

//El evento de submit (Usualmente en un formulario vas a usar submit, el submit esta asociado al formulario)

//Eventos de text Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    //Validar formulario

    const { nombre, email, mensaje } = datos
    if (nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'alerta')
        return //Dentro de un if o una funcion, utilizamos return para cortar la ejecución del código
    }

    //Enviar formulario
    mostrarAlerta('Mensaje enviado correctamente')

})

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value
    
}

//Refactorizando Alertas
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)

    setTimeout(()=>{
        alerta.remove()   
    },5000)
}
