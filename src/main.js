// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
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
