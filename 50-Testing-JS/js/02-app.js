// Probar 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(5, 2);
esperado = 3;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

function expected( esperado ) {

    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
            
            } else {
            
                console.log('La prueba pasó correctamente');
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.log(`El ${resultado} no es igual a lo esperado; la prueba no pasó`);
            
            } else {
            
                console.log('La prueba pasó correctamente');
            }
        }
    }

}