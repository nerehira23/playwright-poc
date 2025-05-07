const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.inputUsuario = page.locator('#usuario');
    this.inputContrasenia = page.locator('#contraseña');
    this.btnIngresar = page.locator('button', { hasText: 'Ingresar'} );
    this.menuOperaciones = page.locator('span',{ hasText: 'Operaciones'} ).first();
  }

  async wait(time = 3000) {
    await this.page.waitForTimeout(time);
  }

  async visit(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async fillUsername(username) {
    await this.inputUsuario.fill(username);
  }

  async fillPassword(password) {
    await this.inputContrasenia.fill(password);
  }

  async submit() {
    await this.btnIngresar.click();
  }

  async verifyLoginSuccess() {
    await expect(this.menuOperaciones).toBeVisible();
  }

  async login(url, user, password) {
    await this.visit(url);
    await this.fillUsername(user);
    await this.fillPassword(password);
    await this.submit();
    await this.wait();
    await this.verifyLoginSuccess();
  }

};