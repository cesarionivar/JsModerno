const cliente = {
    nombre: 'Cesario',
    saldo: 500
}

console.log(cliente);
console.log( typeof cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const cesario = new Cliente('Cesario', 500);

console.log(cesario);