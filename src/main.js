/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
import { wall } from './components/wall.js';
import { post } from './components/post.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/wall': wall,
  '/post': post,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  if (rootDiv) {
    while (rootDiv.firstChild) { // Mientras contenga informacion
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname]()); // () 'La función'
  }
};

const component = routes[window.location.pathname];
window.onload = () => {
  rootDiv.appendChild(component());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
  while (rootDiv.firstChild) { // Este es para poder usar las flechitas y borrar el pasado
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
