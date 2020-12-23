
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const cesario = new Cliente('Cesario', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearCliente(cesario));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CNST = new Empresa('CN Smart Tech', 3000, 'Tecnología');

console.log(formatearEmpresa(CNST));