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