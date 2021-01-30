import   miNuevaFuncion, { ahorro, mostrarInformacion, nombreCliente as nombre, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

miNuevaFuncion();

console.log(nombre);
console.log(ahorro);

console.log(mostrarInformacion(nombre, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Cesario Nivar', 200, 'Aprendiendo en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

