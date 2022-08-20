import { Product } from 'model/components';
import { ProductE } from 'model/enums';
import { HomePage, ShopPage } from 'model/pages';

const homePage = new HomePage();
const shopPage = new ShopPage();

context('Shop', () => {
  beforeEach(() => {
    cy.start(Cypress._.random(0, 1e6));

    homePage.getMenuButton('shop').click();
    cy.location('pathname').should('eq', '/shop');
  });

  describe('Validate', () => {
    it('Product price', () => {
      shopPage.getProduct(ProductE.TITLE, 'Cheerful Capybara').then((product: Product) => {
        product.getProductValue(ProductE.PRICE).should('eq', '$29.00');
      });
    });

    it('Cart count', () => {
      shopPage.getProduct(ProductE.TITLE, 'Cheerful Capybara').then((product: Product) => {
        // TODO - Replace with .realClick({ clickCount: 3 }) when package is fixed
        product.getQuantityButton(ProductE.ADD).click().click().click();
      });
      shopPage.getCartCount().should('equal', '3');
    });

    it('Product quantity count', () => {
      shopPage.getProduct(ProductE.RATING, '5').then((product: Product) => {
        // TODO - Replace with .realClick({ clickCount: 3 }) when package is fixed
        product.getQuantityButton(ProductE.ADD).click().click();
        product.returnToParent();
        product.getProductValue(ProductE.QUANTITY).should('equal', '2');
      });
      shopPage.getCartCount().should('equal', '2');
    });
  });
});
