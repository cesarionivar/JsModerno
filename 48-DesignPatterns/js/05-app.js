// Module Pattern

const modulo1 = (function(){

    const nombre = 'Cesario';

    function hola() {
        console.log('Hola');
    }


    return {
        nombre, 
        hola
    }
    
})();
