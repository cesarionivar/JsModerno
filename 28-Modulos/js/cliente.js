
export const nombreCliente = 'Cesario';
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('El cliente no tiene saldo');
    }
}










// IIFE
/* (function(){

    console.log('Desde un IIFE');
    
    window.nombreCliente = 'Cesario';

})();*/
