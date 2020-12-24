// Class Delaration
class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

// Insntanciando una clase
const cesario = new Cliente('Cesario', 300);
console.log(cesario);

// Class Expression
const Cliente2 = class {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instanciando una clase
const nivar = new Cliente2('Nivar', 600);
console.log(nivar);