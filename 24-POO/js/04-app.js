class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

const cesario = new Cliente();
// console.log(cesario.mostrarInformacion());
// console.log(cesario.#nombre);
cesario.setNombre('Cesario');
console.log(cesario.getNombre());