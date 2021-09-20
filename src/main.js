/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
import { wall } from './components/wall.js';
import { post } from './components/createPost.js';
import { edit } from './components/edit.js';
import { profile } from './components/profile.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/wall': wall,
  '/post': post,
  '/edit': edit,
  '/profile': profile,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {}, /* objeto de estado */
    pathname, /* título */
    window.location.origin + pathname, /* url */
  );
  if (rootDiv) {
    while (rootDiv.firstChild) { // Mientras contenga informacion
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname]()); // () 'La función'
  }
};
/* Al recargar la página, te mande en la ruta donde estabas  */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    onNavigate(window.location.pathname);
  } else {
    onNavigate('/');
  }
});

const component = routes[window.location.pathname];
window.onload = () => {
  rootDiv.appendChild(component());
};
/* Evento que se activa al utilizar las flechas */
window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
  while (rootDiv.firstChild) { // Este es para poder usar las flechitas y borrar el pasado
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
