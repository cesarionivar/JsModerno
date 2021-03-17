// Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


const persona = new Persona('Cesario', 'email@email.com');
console.log(persona);