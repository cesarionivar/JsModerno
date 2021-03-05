const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    fetch('./data/empleado.json')
        .then(respuesta => respuesta.ok ? respuesta.json() : new Promise.reject('Ocurrió un error'))
        .then(json => mostrarHTML(json))
        .catch(err => console.log(err));

}

function mostrarHTML(datos) {
    const {empresa, id, nombre, trabajo} = datos;

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;


}