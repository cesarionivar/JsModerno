
// break - Rompe la ejecución
for (let i = 1; i <= 10; i++) {
    
    if (i === 5) {
        console.log('Número 5');     
        break;
    }

    console.log(`Número ${i}`);
}

// ------------------- CONTINUE ---------------- //

// continue - Salta la ejecución      
for (let i = 1; i <= 10; i++) {
    
    if (i === 5) {
        console.log('CINCO');     
        continue;
    }

    console.log(`Número ${i}`);
}

// ------------------- EJEMPLO CONTINUE -------------- //

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 }
];

for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].descuento) {
        console.log(`El producto ${carrito[i].nombre} tiene un descuento.`);
        continue;
    }

    console.log(carrito[i]);
    
}
