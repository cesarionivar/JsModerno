import Citas from '../js/classes/Citas.js';

describe('Probar la clase de citas', ()=> {

    const citas = new Citas();

    test('Agregar una nueva cita', ()=> {

        const citaObj = {
            mascota: 'Hook',
            propietario: 'Cesario',
            telefono: '80945264120',
            fecha: '20-03-2021',
            hora: '01:28',
            sintomas: 'Solo duerme'
        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();

    });
});