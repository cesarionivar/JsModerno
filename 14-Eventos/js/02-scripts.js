const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
});
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseup', () => {
    console.log('Mouse Up');
});

/* 
mousedown - similar al click
click
dbclick = doble click
mouseup - cuando sueltas el mouse
*/