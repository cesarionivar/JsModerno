import { ahorro, mostrarInformacion, nombreCliente, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";
// Importar empresa

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Cesario Nivar', 200, 'Aprendiendo en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

