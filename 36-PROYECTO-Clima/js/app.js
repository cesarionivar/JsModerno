const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', ()=> {
    formulario.addEventListener('submit', buscarClima);
});


function buscarClima(e) {
    e.preventDefault();

    // Validar datos del formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    
    if(ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    
    consultarAPI(ciudad,  pais);

}


function mostrarError(mensaje) {

    const existeAlerta = document.querySelector('.bg-red-100');
    if(existeAlerta) return;
    
    // Crear una alerta
    const alerta = document.createElement('div');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    `;

    container.appendChild(alerta);

    setTimeout(()=> {
        alerta.remove();
    }, 3000);
}

function consultarAPI(ciudad, pais) {
    
    ciudad = ciudad.replace(' ', '%20');

    const appId = '0e97327e2a97a84006cf8769893265e7'; //Key, Públicada por fines educativos
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML(); 
            if(datos.cod === '404') {
                mostrarError('Ciudad no encontrada');
                return;
            }

            // Imprime la respuesa en el HTML
            mostrarClima(datos);
        });
}

function mostrarClima(datos) {
    const {main: {temp, temp_max, temp_min} } = datos;

    const centigrados = kelvinACentigrados(temp);
    
    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}