const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {

    // Agregar y quitar una clase de forma condicional
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';

    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }

    // Agregar y quitar clase mediante un metodo
    // footer.classList.toggle('activo');
    // btnFlotante.classList.toggle('activo');
}