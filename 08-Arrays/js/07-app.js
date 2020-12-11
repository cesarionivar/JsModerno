const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Mouse",
    precio: 300
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

// Eliminar último elemento de un arreglo...
// carrito.pop();

console.table(carrito);

// Eliminar al inicio
// carrito.shift();
// console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);
