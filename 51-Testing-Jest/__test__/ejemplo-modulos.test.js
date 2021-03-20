// import { suma } from '../js/funciones.js'; 


function suma(a, b) {
    return a + b;
}


describe('Suma de 2 números', () => {
    test('Sumar 10 y 20, debe dar como resultado 30', () => {
        expect(suma(10, 20)).toBe(30);
    });
});