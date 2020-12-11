const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const {nombre} = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

const [, , , , quinto] = numeros;

console.log(quinto);

const [primero, segundo, ...tercero] = numeros;
console.log(tercero);