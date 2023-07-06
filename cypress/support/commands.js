/// <reference types="cypress"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('seElementoExisteClica', (selector) => {
  cy.log(`Verificando se o elemento ${selector} existe.`)
  cy.get('body').then(($body) => {
    if ($body.find(selector).length) {
      return cy.get(selector)
    } else {
      // Não gera erro quando o elemento não é encontrado
      assert.isOk('OK - Não existe elemento para clicar. Avançando!!.')
    }
    //#####################
    //## USO NOS TESTES: ##

    // cy.wait(3000); //o elemento sempre deve estar carregado, se não ocorrerá erro.
    // cy.seElementoExisteClica(elemento).then((confirmBtn) => {
    //   cy.wrap(confirmBtn).click();
    // });
    //#####################
  })

  Cypress.Commands.add('seElementoExiste', (selector) => {
    cy.log(`Verificando se o elemento ${selector} existe.`)
    cy.get('body').then(($body) => {
      if ($body.find(selector).length) {
        return cy.get(selector)
      } else {
        // Não gera erro quando o elemento não é encontrado
        assert.isOk('OK - Elemento não existe. Avançando!!.')
      }
      //#####################
      //## USO NOS TESTES: ##

      // cy.wait(3000); //o elemento sempre deve estar carregado, se não ocorrerá erro.
      // cy.seElementoExisteClica(elemento).then((confirmBtn) => {
      //   cy.wrap(confirmBtn).should('be.visible');
      // });
      //#####################
    })
  })

});
