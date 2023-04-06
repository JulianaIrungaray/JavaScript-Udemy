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
