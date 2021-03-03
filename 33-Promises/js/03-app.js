const aplicarDescuento = new Promise( (resolve, reject) => {
    
    const descuento = true;

    if(descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

aplicarDescuento
    .then( resultado => {
        // console.log(resultado);
        descuento(resultado);
    })
    .catch( error => {
        console.log(error);
    });

// Hay 3 valores posibles
// 1. fulfilled - El promise se cumplió
// 2. rejected - El promise no se cumplió
// 3. Pending - No ha realizando ninguna acción (Ni se cumplió, ni se rechazó)

function descuento(mensaje) {
    console.log(mensaje);
}