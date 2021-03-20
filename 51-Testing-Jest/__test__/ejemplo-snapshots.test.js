const cliente = {
    nombre: 'Cesario Nivar',
    balance: 500,
    tipo: 'Premium'
};


describe('Testing al cliente', ()=>{ 
    test('Es Cesario', ()=> {
        expect(cliente).toMatchSnapshot();
    });
})