import template from './template.js';
// Este es el punto de entrada de tu aplicacion
console.log(template);
const database = firebase.firestore();
console.log(database);

// Routeo ----------------------------------------------------------------------------
const routes = {
  '/': template.home.template,
  '/register': template.register.template,
  '/login': template.login.template,
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};
console.log(onNavigate);

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const btnRouting = document.querySelectorAll('.btn-routing');
console.log(btnRouting);
for (let i = 0; i < btnRouting.length; i++) {
  btnRouting[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    onNavigate(btnRouting[i].value);
  });
}

// REGISTRO -----------------------------------------------------------------
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = registerForm['user-name'].value;
  const email = registerForm['user-email'].value;
  const password = registerForm['user-password'].value;

  await database.collection('users').doc().set({
    userName,
    email,
    password,
  });

  console.log(userName, email, password);
});
