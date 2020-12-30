// Symbols

const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log(Symbol() === Symbol());

// Los Symbols nunca son iguales
/* if(sym === sym2) {
    console.log('Son iguales!!');
} else {
    console.log('Son diferentes');
} */

const nombre = Symbol()
const apellido = Symbol();


const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Cesario';
persona[apellido] = 'Nivar';
persona.tipoCliente = 'Premium';
persona.saldo = 300;

console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');

const cliente = {}

cliente[nombreCliente] = 'Cesario';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);