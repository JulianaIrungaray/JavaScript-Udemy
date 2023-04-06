// querySelector
//Seleccionar un elemento de HTML:
const heading = document.querySelector(".header__texto h2"); //Retorna 0 o 1 elementos

//Modificar el h1:
heading.textContent = "Nuevo h1";
console.log(heading);

//agregar una clase al HTML:
// heading.classList.add("nueva-clase");


// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); 

//Para poder seleccionar el primer elemento de los enlaces se busca el elemento como en un arreglo
// console.log(enlaces[0]);

//Modificar texto
enlaces[0].textContent="Nuevo texto para enlace";

// //Modificar ruta del enlace
// enlaces[0].href="http://google.com"

//agregar clase nueva:
enlaces[0].classList.add('nueva-clase');
//Eliminar clase:
// enlaces[0].classList.remove('navegacion__enlace');



// getElementById PASOS:
const heading2 = document.getElementById('heading');
console.log(heading2);

//Como generar código HTML o elementos
const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href='nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent='Un nuevo enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregar al Documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//EVENTOS
// console.log(1);

// //callBack
// window.addEventListener('load', function() {//load espera a que el JS y TODOS los archivos que dependen del HTML estén listos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { //Solo espera a que se descargue el HTML, pero no espera CSS o img
//     console.log(4);
// })

// console.log(5);


// window.onscroll = function(){ //Se ejecuta cuando estamos haciendo scroll
//     console.log('scrolling...');
// }

//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e) {
    console.log(e);

    //cancela el evento, lo que significa que cualquier acción por 
    //defecto que deba producirse como resultado de este evento, no ocurrirá.
    e.preventDefault();

    console.log("Enviando formulario");
})

//Eventos de los Inputs y Textarea
const datos = { //OBJETO
    nombre: '',
    email: '',
    mensaje: ''

}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(e.target);

    console.log(datos);
}
