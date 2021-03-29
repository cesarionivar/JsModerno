/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {

    it('Campos nueva cita', () => {

        cy.visit('/index.html');
        
        cy.get('[data-cy="mascota-input"]')
            .type('Hook');

        cy.get('[data-cy="propietario-input"]')
            .type('Cesario');

        cy.get('[data-cy="telefono-input"]')
            .type('8093465343');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-03-29');
        
        cy.get('[data-cy="hora-input"]')
            .type('16:29');
        
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo duerme!!');
        
        cy.get('[data-cy="submit"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]')
        .invoke('text')
        .should('equal', 'Se agregó correctamente');
        
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');
        

    });

    it('Edita la cita', () => {

        cy.get('[data-cy="btn-editar"]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('NUEVO HOOK');

        cy.get('[data-cy="submit"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');


    });

});