/// <reference types="cypress" />

describe('Carga la página prinicpal', () => {

    it('Carga la página principal', () => {

        cy.visit('/index.html');
                
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
        
        // cy.get('h1').should('exist');


        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
        
        cy.get('[data-cy="titulo-proyecto"]').should('exist');


        // Verificar que exista el elemento y contenga un texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        
        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
    });

});
