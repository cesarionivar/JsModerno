
const obtenerCliente = () => {
    const nombre = 'Cesario';

    function muestraNombre() {
        console.log(nombre);
    }


    return muestraNombre;

}

const cliente = obtenerCliente();

cliente();