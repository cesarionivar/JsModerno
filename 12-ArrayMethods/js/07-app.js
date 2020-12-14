const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = [
    'Agosto', 'Septiembre'
];

const meses3 = [
    'Octubre', 'Noviembre', 'Diciembre'
];

// .concat
const resultado = meses.concat(meses2);
console.log(resultado);


// Spread operator or rest operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);