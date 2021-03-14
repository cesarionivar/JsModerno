function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}


const auto = new Auto('Camaro', 'Negro');
console.log(auto);


// Windwo binding
window.color = 'Rojo';
function hola() {
    console.log(color);
}

hola();