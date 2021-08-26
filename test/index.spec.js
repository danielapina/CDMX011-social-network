/**
 * @jest-environment jsdom
 */
import { home } from '../src/components/home.js';

describe('Coleccion de test sobre HOME', () => {
  const homeRender = home();
  test('Button register', () => {
    const btnRegister = homeRender.querySelector('#btn-register');
    console.log(btnRegister.outerHTML);
    btnRegister.click();
    console.log(btnRegister.outerHTML);
  });
});
