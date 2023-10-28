/// <reference types = "cypress"/>
import CheckoutPage from "../support/page-objects/checkout.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    /*  Como cliente 
    Quero acessar a Loja EBAC 
    Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho
    Preenchendo todas opções no checkout
    E validando minha compra ao final */


    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve adicionar os quatro produtos ao carriho e finalizar o checkout', () => {
        cy.addProdutos('Abominable Hoodie', 1, 'M', 'Blue')
        cy.addProdutos('Beaumont Summit Kit', 1, 'S', 'Red')
        cy.addProdutos('Bruno Compete Hoodie', 1, 'M', 'Black')
        cy.addProdutos('Caesar Warm-Up Pant', 1, '34', 'Gray')
        cy.get('.dropdown-toggle > .text-skin').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        CheckoutPage.preencherCheckoutCompra('Flavio', 'Fonseca', 'Brasil', 'Av. Brasil', '3100', 'São paulo', 'São Paulo', '76380000', '62985635422', 'email@email.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')
    });
});
