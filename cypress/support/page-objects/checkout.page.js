class CheckoutPage{
    preencherCheckoutCompra(nome, sobrenome, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#select2-billing_country-container')
        .click({ force: true }) // Use { force: true } para forçar o clique
        .type(pais)
        .get('[aria-readonly="true"]')
        .click({ multiple: true }) 
         cy.get('#select2-billing_country-container')
            .click({ force: true }) // Use { force: true } para forçar o clique
            .type(pais)
            .get('[aria-readonly="true"]')
            .click({ multiple: true }) 
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado +'{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)    
    }
}

export default new CheckoutPage()