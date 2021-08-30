/**
 * @jest-environment jsdom
 */
import { home } from '../src/components/home.js';

describe('Coleccion de test sobre HOME', () => {
  const homeRender = home();
  test('Button register', () => {
    const btnRegister = homeRender.querySelector('#btn-register');
    btnRegister.click();
    expect(btnRegister.outerHTML).toBe('<button class="blue btn-routing" id="btn-register" value="/register">¡Regístrate!</button>');
  });
  test('Icon Burguer', () => {
    const btnIcon = homeRender.querySelector('#users-icon');
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
});
