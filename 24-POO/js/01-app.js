// Class Delaration
class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

// Insntanciando una clase
const cesario = new Cliente('Cesario', 300);
console.log(cesario.mostrarInformacion());
console.log(cesario);


console.log(Cliente.bienvenida());

// Class Expression
const Cliente2 = class {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

// Instanciando una clase
const nivar = new Cliente2('Nivar', 600);
console.log(nivar.mostrarInformacion());
console.log(nivar);