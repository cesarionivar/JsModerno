// Constructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {

    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Jose Yunior', 'info@mail.com');
const cliente = new Cliente('Cesario', 'email@email.com', 'CN Smart Tech');
