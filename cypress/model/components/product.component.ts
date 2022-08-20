import { ProductE } from 'model/enums';

export class Product {
  private rootElement: Cypress.Chainable<JQuery<HTMLElement>>;

  constructor(rootElement: Cypress.Chainable<JQuery<HTMLElement>>) {
    this.rootElement = rootElement;
  }

  getProductValue(id: ProductE) {
    return this.rootElement.find(`[data-locator="${id}"]`).invoke('text');
  }

  getQuantityButton(button: ProductE.ADD | ProductE.REMOVE) {
    return this.rootElement.find(`[role="button"][data-locator="${button}"]`).should('be.visible');
  }

  returnToParent() {
    return this.rootElement.parents(`[data-locator="${ProductE.PARENT}"]`);
  }
}
