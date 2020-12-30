const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// carrito.delete('Disco #3');

// console.log(carrito.has('Guitarra'));

// console.log(carrito.size);

// carrito.clear();

carrito.forEach(producto => {
    console.log(producto);
});

// console.log(carrito);