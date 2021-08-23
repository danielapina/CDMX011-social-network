// import { onNavigate } from './main.js';

export const register = () => {
  const html = `
  <div id="register-page">
     <form class ="form-inicial">
       <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
       <h2 class="titles" id="title-form">Registro</h2>
       <label for="email">Correo electronico</label>
       <input type="email" id="user-email" />
       <label for="password">Contraseña</label>
       <input type="password" id="user-password" />
       <button id="form-button">Enviar</button>
     </form>
     <div class="img-register-desktop">
       <img id="madre-tierra" src="img/madreTierra.png" alt="MadreTierra" />
     </div>
   </div>
`;
  const divRegister = document.createElement('div');
  divRegister.innerHTML = html;

  function sendUser() {
    const email = divRegister.querySelector('#user-email').value;
    const password = divRegister.querySelector('#user-password').value;

    console.log(`Email: ${email}Password: ${password}`);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid+'Entre IF');
        // ...
      } else {
        // User is signed out
        // ...
        console.log('Entre ELSE');
      }
    });
  }

  const btnForm = divRegister.querySelector('#form-button');
  btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    sendUser();
  });

  return divRegister;
};
