/// <reference types = "cypress"/>

context('Funcionalidade Login', () => {
  
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20 (não é aluno_ebac20? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usário inválido', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno@teste.com')
      cy.get('#password').type('testeteste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'e-mail')
    })

    it('Deve exibir uma mensagem de erro ao senha inválida', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error > li').should('contain', 'a senha')
    })
})