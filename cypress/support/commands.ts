/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('start', (uniqueId) => {
  cy.session([uniqueId], () => {});
  cy.visit('/');
});

Cypress.Commands.add('getButtonByText', (text) => {
  return cy.get('button').contains(text);
});

Cypress.Commands.add('getButtonById', (id) => {
  return cy.get(`button[data-locator="${id}"]`);
});

declare namespace Cypress {
  interface Chainable {
    start(uniqueId: string | number): Chainable<void>;

    getButtonByText(text: string): Chainable<any>;
    getButtonById(id: string): Chainable<any>;
  }
}
