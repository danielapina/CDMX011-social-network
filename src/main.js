// Este es el punto de entrada de tu aplicacion
const database = firebase.firestore();
console.log(database);

document.getElementById('form-register').style.display = 'none';

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = registerForm['user-name'].value;
  const email = registerForm['user-email'].value;
  const password = registerForm['user-password'].value;

  const newUser = await database.collection('users').doc().set({
    userName,
    email,
    password,
  });

  console.log(newUser);
  console.log(userName, email, password);
});
