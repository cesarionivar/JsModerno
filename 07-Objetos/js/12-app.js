// Objet Literal
const producto =  {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Objet Constructor

function Producto (nombre, precio) { 

    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;

}

const producto2 = new Producto('Monitoe 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television', 220);
console.log(producto3);

