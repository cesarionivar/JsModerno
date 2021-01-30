import { ahorro, mostrarInformacion, nombreCliente, tieneSaldo, Cliente } from "./cliente.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

