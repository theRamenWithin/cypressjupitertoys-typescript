import { HomePage, ContactPage } from 'model/pages';
import * as data from 'fixtures/contact.json';

const homePage = new HomePage();
const contactPage = new ContactPage();

beforeEach(() => {
  cy.start(Cypress._.random(0, 1e6));

  homePage.getMenuButton('contact').click();
  cy.location('pathname').should('eq', '/contact');
});

context('Contact', () => {
  describe('Validate', () => {
    it('Input errors appear', () => {
      cy.getButtonByText('Submit').click();

      contactPage.getInputError('forename', data.errors.input.validation.forename);
      contactPage.getInputError('email', data.errors.input.validation.email);
      contactPage.getInputError('message', data.errors.input.validation.message);
    });

    it('Input errors can be resolved', () => {
      cy.getButtonByText('Submit').click();

      contactPage.getInput('forename').type('Alex');
      contactPage.getInput('email').type('apike@planittesting.com');
      contactPage.getInput('message').type('Hello');

      contactPage.getInputError('forename', '');
      contactPage.getInputError('email', '');
      contactPage.getInputError('message', '');
    });

    it('Form submission', () => {
      contactPage.getInput('forename').type('Alex');
      contactPage.getInput('email').type('apike@planittesting.com');
      contactPage.getInput('message').type('Hello').getButtonByText('Submit').click();
      contactPage.getSuccessMessage().should('contain', data.success.submit.message);
    });
  });
});
