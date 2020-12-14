// forEach

const pendientes = [
    'Tareas', 'Comer', 'Proyecto', 'Estudiar JavaScript'
];

pendientes.forEach( (pendiente, indice) => {
    // console.log(`${indice} : ${pendiente}`);
});



const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
];

const arreglo = carrito.forEach((producto) => producto.nombre);

const arreglo2 = carrito.map((producto) => producto.nombre);

console.log(arreglo);
console.log(arreglo2);