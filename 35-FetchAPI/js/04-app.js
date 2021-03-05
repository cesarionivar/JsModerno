const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const URL = 'https://picsum.photos/list';

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
        .catch(err => console.log(err));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(el => {
        const {author, post_url} = el;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
}