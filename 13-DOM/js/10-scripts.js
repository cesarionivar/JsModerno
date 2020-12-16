const enlace = document.createElement('A');

// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

// Seleccionar la navegación
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(e) {
    e.preventDefault();
    alert('Diste click');
}


// Crear un card de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');



const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');


// Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);

console.log(card);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);