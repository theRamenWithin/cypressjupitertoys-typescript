import { Product } from 'model/components/';
import { ProductE } from 'model/enums';
import BasePage from './base.page';

export class ShopPage extends BasePage {
  getProducts() {
    return cy.get(`[data-locator="${ProductE.PARENT}"]`).should('be.visible');
  }

  getProduct(matcher: ProductE, matchValue: string | number): Promise<Product> {
    // TODO - Make this handle multiple matches, not just the first match
    return new Cypress.Promise((resolve, reject) => {
      try {
        this.getProducts().within(($product) => {
          cy.wrap($product)
            .find(`[data-locator="${matcher}"]`)
            .contains(matchValue)
            .parents(`[data-locator="${ProductE.PARENT}"]`)
            .then((product) => {
              resolve(new Product(cy.wrap(product)));
            });
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
