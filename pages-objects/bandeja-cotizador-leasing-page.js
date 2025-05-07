const { expect } = require('@playwright/test');

exports.BandejaCotizadorLeasingPage = class BandejaCotizadorLeasingPage {

  constructor(page) {
    this.page = page;
    this.menuOperaciones = page.locator('span', { hasText: 'Operaciones'}).first();
    this.submenuOperaciones = page.locator('#SubMenu24 > a > span');
    this.btnAgregar = page.locator('#btnAgregarSubheader');
    this.btnBuscar = page.locator('#btnBuscarClienteModal').first();
    this.btnBuscarCliente = page.locator('#btnBuscarCliente').first();
    this.inputBuscar = page.locator('.d-block > [style="position: relative;"] > [data-test="datatable"] > :nth-child(1) > [data-test="datatable-search"] > [data-test="datatable-input"] > .form-control');
    this.btnSeleccionarCliente = page.locator('tr > :nth-child(1) > .btn');
    this.txtRazonSocial = page.locator('#txtRazonSocial').first();
  }

  async wait(time = 3000) {
    await this.page.waitForTimeout(time);
  }

  async reload() {
    await this.page.reload();
  }

  async openCotizadorLeasingMenu() {
    await this.menuOperaciones.click();
    await this.submenuOperaciones.click();
    await this.reload();
  }

};