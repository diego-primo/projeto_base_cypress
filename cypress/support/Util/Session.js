const login = require("../../fixtures/login.json");

export class Session {
  static login() {
    cy.get("input[name=login]").type(login.username);
    cy.get("input[name=pass]").type(login.password, { log: false });
    cy.get('button[id="login"]').click();
  }

  static loginComParametros(username, password) {
    cy.get("input[name=login]").type(username);
    cy.get("input[name=pass]").type(password, { log: false });
    cy.get('button[id="login"]').click();
  }

  static logout() {
    cy.get("nav").contains("Sair").click();
  }
}