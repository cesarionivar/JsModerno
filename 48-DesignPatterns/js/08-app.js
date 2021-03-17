// Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {

    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : `);
    }
}

function Subasta() {

    let compradores = {};
    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear Objetos
const cesario = new Comprador('Cesario');
const jose = new Comprador('Jose');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();


// Registrar las subastas (Mediator Design Pattern)
subasta.registrar(jose);
subasta.registrar(cesario);


vendedor.oferta('Mustang 66', 300);


jose.oferta(350, jose);
jose.oferta(450, cesario);
jose.oferta(55, jose);
jose.oferta(55, jose);

vendedor.vendido('Jose');