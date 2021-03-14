
self.onload = () => {
    console.log('Ventana lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = { 
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${self.nombre}`
    }
}

console.log(producto.mostrarInfo());