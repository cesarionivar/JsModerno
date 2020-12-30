// weakset

const weakset = new WeakSet();

const cliente = {
    nombre: 'Cesario',
    saldo: 100
}

const nombre = 'Cesario';

weakset.add(cliente);
// weakset.add(nombre); // Solo se pueden pasar objetos

// console.log(weakset.has(cliente));



console.log(weakset);