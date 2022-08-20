import { LoginI } from 'model/interfaces';
import BasePage from './base.page';

export class LoginModal extends BasePage {
  login(data: LoginI) {
    this.getMenuButton('login').click();
    this.getModalInput('username').type(data.username);
    this.getModalInput('password').type(data.password);
    this.getModalInput('agree').check();
    this.getModalButton('Log In').click();
  }

  logout() {
    this.getMenuButton('logout').click();
    this.getModalButton('Yes').click();
  }
}
