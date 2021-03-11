function descargarClientes() {

    return new Promise((resolve, reject)=> {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });

}

// Async await
const ejecutar =  async () => {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();
        console.log(respuesta);
        console.log(2 + 2);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();