/**
 * @jest-environment jsdom
 */
import './global/firebase.js';
import { home } from '../src/components/home.js';
import { login } from '../src/components/login.js';
import { register } from '../src/components/register.js';

describe('Coleccion de test sobre HOME', () => {
  const homeRender = home();
  document.body.innerHTML = '<div id="root"></div>';
  test('should render', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(homeRender);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
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
  test('Remove show de Icon Burguer', () => {
    const btnIcon = homeRender.querySelector('#users-icon');
    btnIcon.click();
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
});

describe('Coleccion de test soble LOGIN', () => {
  document.body.innerHTML = '<div id="root"></div>';
  test('should render', () => {
    const rootDiv = document.getElementById('root');
    const component = login();
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});

describe('Coleccion de test soble REGISTER', () => {
  document.body.innerHTML = '<div id="root"></div>';
  test('should render', () => {
    const rootDiv = document.getElementById('root');
    const component = register();
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
