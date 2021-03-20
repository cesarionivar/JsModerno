const cliente = {
    nombre: 'Cesario', 
    balance: 500
};

describe('Testting al Cleinte', ()=> {
    test('El cliente es premium', ()=> {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Cesario', () => {
        expect(cliente.nombre).toBe('Cesario');
    });

    test('No es otro cliente', ()=> {
        expect(cliente.nombre).not.toBe('Josue');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });

});