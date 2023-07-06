/// <reference types="cypress"/>
const elemento = require('./elementos').ELEMENTOS_TESTES

class ActionsTestes {

  clicarBotaoPrincipal() {
    cy.get(elemento.btnPrincipal).should('be.visible').click({ force: true });
  }
  acessarFuncionalidade() {
    this.clicarBotaoPrincipal();
  }
}
export default new ActionsTestes();
