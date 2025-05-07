// @ts-check
import { test } from '@playwright/test';
import { LoginPage} from '../pages-objects/login-page' 
import { BandejaCotizadorLeasingPage } from '../pages-objects/bandeja-cotizador-leasing-page';

const data = {
  url: 'https://sitio.web.cl/',
  usuario: 'user@business.cl',
  pass: 'busines@123',
  cliente: 'ALE SPA',
  categoriaBien: 'Liviano',
};

test.describe('Cotizacion leasing', () => {

  test.beforeEach(async ({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.login(data.url, data.usuario, data.pass);
  });

  test('Alta cotizacion leasing', async ({ page }) => {
    const bandejaCotizadorLeasingPage = new BandejaCotizadorLeasingPage(page);
    await bandejaCotizadorLeasingPage.openCotizadorLeasingMenu();
  });

});
