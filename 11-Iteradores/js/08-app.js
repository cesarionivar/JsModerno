const pendientes = [
    'Tareas', 'Comer', 'Proyecto', 'Estudiar JavaScript'
];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}


for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

// for of opera sobre arreglos
// for in opera sobre objetos


// iterar sobre los valores de un objeto.
for( let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}