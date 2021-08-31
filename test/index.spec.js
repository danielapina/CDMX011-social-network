/**
 * @jest-environment jsdom
 */
import './global/firebase.js';
import './global/firebaseRegister.js';
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
  const component = login();
  test('should render', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('should logIn user when the submit button is clicked', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);

    const email = 'test@laboratoria.la';
    const password = '123456';
    document.getElementById('login-email').value = email;
    document.getElementById('login-password').value = password;

    document.getElementById('form-button').click();

    expect(mockLogin).toHaveBeenCalledWith(email, password);
  });
  test('Icon Burguer', () => {
    const btnIcon = component.querySelector('#users-icon');
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
  test('Remove show de Icon Burguer', () => {
    const btnIcon = component.querySelector('#users-icon');
    btnIcon.click();
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
});

describe('Coleccion de test soble REGISTER', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const component = register();
  test('should render', () => {
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('should logIn user when the submit button is clicked', () => {
    const mockRegister = jest.fn();
    mockRegister.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      createUserWithEmailAndPassword: mockRegister,
    }));
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(component);

    const email = 'test@laboratoria.la';
    const password = '123456';
    const confirmPassword = '123456';
    document.getElementById('user-email').value = email;
    document.getElementById('user-password').value = password;
    document.getElementById('confirm-password').value = confirmPassword;

    document.getElementById('form-button').click();

    expect(mockRegister).toHaveBeenCalledWith(email, password);
  });
  test('Icon Burguer', () => {
    const btnIcon = component.querySelector('#users-icon');
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
  test('Remove show de Icon Burguer', () => {
    const btnIcon = component.querySelector('#users-icon');
    btnIcon.click();
    btnIcon.click();
    expect(btnIcon.outerHTML).toBe('<span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>');
  });
});
