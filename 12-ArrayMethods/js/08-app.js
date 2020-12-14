const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// rest operator con arreglo de indices - El orden es de suma importancia
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const producto = {
    nombre: 'Disco Duero',
    precio: 300
}

const carrito2 = [producto, ...carrito];
console.log(carrito2);