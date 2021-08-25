// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
import { profile } from './components/profile.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/profile': profile,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) { // Mientras contenga informacion
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]()); // () 'La función'
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

// Este es el punto de entrada de tu aplicacion
// const database = firebase.firestore();
// console.log(database);

// -------------------------------icon burguer
document.getElementById('users-icon').addEventListener('click', () => {
  const mostrar = document.getElementById('navegacion').className;
  if (mostrar === '') {
    document.getElementById('navegacion').setAttribute('class', 'show');
  } else {
    document.getElementById('navegacion').removeAttribute('class', 'show');
  }
});
// -------------------------------icon mostrar password
document.querySelector('#hide1').addEventListener('click', (e) => {
  const passwordInput = document.querySelector('#user-password');
  if (e.target.classList.contains('show')) {
    e.target.classList.remove('show');
    passwordInput.type = 'text';
  } else {
    e.target.classList.add('show');
    passwordInput.type = 'password';
  }
});
// -------------------------------icon mostrar confirm-pass
document.querySelector('#hide2').addEventListener('click', (e) => {
  const passwordInput = document.querySelector('#confirm-password');
  if (e.target.classList.contains('show')) {
    e.target.classList.remove('show');
    passwordInput.type = 'text';
  } else {
    e.target.classList.add('show');
    passwordInput.type = 'password';
  }
});
