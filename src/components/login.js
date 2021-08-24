// import { onNavigate } from '../main.js';

export const login = () => {
  const html = `
  <div id="login-page">
     <form class ="form-inicial">
       <h2 class="titles" id="title-form">Login</h2>
       <label for="email">Correo electronico</label>
       <input type="email" id="user-email" />
       <label for="password">Contraseña</label>
       <input type="password" id="user-password" />
       <button id="form-button">Enviar</button>
     </form>
     <div class="img-register-desktop">
       <img id="heart" src="img/heart.png" alt="heart" />
     </div>
   </div>
  `;
  const divLogin = document.createElement('div');
  divLogin.innerHTML = html;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      console.log
    } else {
      // User is signed out
      // ...
    }
  });

  return divLogin;
};
