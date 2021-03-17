// Namespace

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    }, 
    {
        platillo: 'Hamburguesa',
        precio: 20
    }, {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restaurantApp.funciones = {
    mostrarMenu: () => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });

    },
    ordernar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.ordernar(1);
restaurantApp.funciones.agregarPlatillo('Taco', 20);

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu( platillos );
