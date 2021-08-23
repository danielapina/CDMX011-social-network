document.getElementById('form-register').style.display = 'none';

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  //const userName = registerForm['user-name'].value;
  const email = registerForm['user-email'].value;
  const password = registerForm['user-password'].value;

  const newUser = await database.collection('users').doc().set({
    //userName,
    email,
    password,
  });
  console.log(newUser);
  console.log(email, password);
});

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('user-email').value;
  const password = document.getElementById('user-password').value;
  console.log(email, password);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // reset form
      registerForm.reset();
      console.log('sign up');
    });
});