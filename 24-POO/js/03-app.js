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

// Herencia 
class Empresa extends Cliente {

    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // Rescribir un método (POLIMORFISMO)
        return `Bienvenido al cajero de empresas`;
    }


}

const cesario = new Cliente('Cesario', 2000);
const empresa = new Empresa('CN Smart Tech', 20000, 8093434324, 'Tecnología');

console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());