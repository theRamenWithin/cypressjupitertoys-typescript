import BasePage from './base.page';

export class ContactPage extends BasePage {
  getSuccessMessage() {
    return cy.get('#success-message', { timeout: 60000 }).should('be.visible').invoke('text');
  }
}
