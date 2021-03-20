import Citas from '../js/classes/Citas.js';

describe('Probar la clase de citas', ()=> {

    const citas = new Citas();
    const id = Date.now();
    
    test('Agregar una nueva cita', ()=> {
        
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Cesario',
            telefono: '80945264120',
            fecha: '20-03-2021',
            hora: '01:28',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();

    });

    test('actualiazr cita', () => {

        const citaActualizada = {
            id,
            mascota: 'Redux',
            propietario: 'Cesario',
            telefono: '80945264120',
            fecha: '20-03-2021',
            hora: '01:28',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();


    });

    test('Elliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });

});