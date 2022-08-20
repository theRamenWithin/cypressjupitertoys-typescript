export default abstract class BasePage {
  // Menu
  private getMenu() {
    return cy.get('nav.header').should('be.visible');
  }

  getMenuButton(location: 'home' | 'shop' | 'contact' | 'login' | 'logout' | 'cart') {
    return this.getMenu().find(`#menu-${location}`).should('be.visible');
  }

  getCurrentUser() {
    return this.getMenu().find('#login-greeting');
  }

  getCartCount() {
    return this.getMenu().find('#cart-count').should('be.visible').invoke('text');
  }

  // Modal
  private getModal() {
    return cy.get('.ReactModal__Content').should('be.visible');
  }

  getModalButton(text: string) {
    return this.getModal().find('button').contains(text).should('be.visible');
  }

  getModalInput(id: string) {
    return this.getModal().find(`input#${id}`).should('be.visible');
  }

  // Page
  getInput(id: string) {
    return cy.get(`#${id}`).should('be.visible');
  }

  getInputError(id: string, error: string) {
    return this.getInput(id).should('have.attr', 'error', error);
  }
}
