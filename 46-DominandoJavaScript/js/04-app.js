// Implicit Binding

const usuario = {
    nombre: 'Cesario',
    edad: 22,
    informacion() {
        console.log(`Mi nmbre es ${this.nombre} y mi edad es ${this.edad}`);0
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {
            console.log(`Mi nmbre es ${this.nombre} y mi edad es ${this.edad}`);0
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();