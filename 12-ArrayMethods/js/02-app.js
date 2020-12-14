const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/* function buscarIndexMes(mesBuscar){
    meses.forEach((mes, index) => {

        if(mes === mesBuscar) {
            const resultado = console.log(`${mesBuscar} encontrado en el indice ${index}`);
            return resultado;
        } else {
            const resultado = 'No encontrado';
            return resultado;
        }
    });
} 

buscarIndexMes('Febrero');
console.log(buscarIndexMes('Diciembre')); */

// Encontrar el indice de Abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

const index = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(index);

 