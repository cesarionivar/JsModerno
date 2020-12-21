const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJson = localStorage.getItem('producto');
console.log(JSON.parse(productoJson));

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);