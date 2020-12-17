const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('Escribiendo...');
// });

// busqueda.addEventListener('blur', () => {
//     console.log('Escribiendo...');
// });

// busqueda.addEventListener('copy', () => {
//     console.log('Escribiendo...');
// });

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Fallo la validación');
    }
    // console.log(e.target.value);

});
