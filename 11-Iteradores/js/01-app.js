

const productos = [
    'Arroz', 'Habichuela', 'Carne'
];


// Interadores 
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(producto);
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 1; i <= 20 ; i++) {
    
    if(i%2 === 0) {
        console.log(`El número ${i} es PAR`);
        
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 }
];

for(let i = 0; i < carrito.length; i++) {
    
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}` );

}