/// <reference types = "cypress"/>
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadstro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso ', () => {
        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let emailFaker = faker.internet.email(nome)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('123456789!@#$%¨&*()')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar a funcionalidade pré cadastro com sucesso usando Comamdos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'kevin', 'fonseca')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});