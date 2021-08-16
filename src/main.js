import template from './template.js';
// Este es el punto de entrada de tu aplicacion
const database = firebase.firestore();
console.log(database);

// Routeo ----------------------------------------------------------------------------
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = template[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = template[pathname];
};
console.log(onNavigate);
// Este ayuda a llamar a la funcion apenas carge la pagina
window.onload = onNavigate('/home');

window.onpopstate = () => {
  rootDiv.innerHTML = template[window.location.pathname];
};
// Aqui pense en hacerlo con clases pero ya me dio hambre
const btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('click', (evt) => { 
  evt.preventDefault();
  onNavigate(btnRegister.value);
});

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
