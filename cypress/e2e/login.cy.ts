import { HomePage, LoginModal } from 'model/pages';
import * as data from 'fixtures/login.json';

const homePage = new HomePage();
const loginModal = new LoginModal();

context('Login', () => {
  beforeEach(() => {
    cy.start(Cypress._.random(0, 1e6));
  });

  describe('Success', () => {
    it('Login', () => {
      homePage.getMenuButton('login').click();
      loginModal.getModalInput('username').type(data.username);
      loginModal.getModalInput('password').type(data.password);
      loginModal.getModalInput('agree').check();
      loginModal.getModalButton('Log In').click();
      homePage.getCurrentUser().invoke('text').should('eq', `Hi ${data.username}`);
    });

    it('Logout', () => {
      loginModal.login(data);
      loginModal.logout();
      homePage.getCurrentUser().should('not.exist');
    });
  });
});
