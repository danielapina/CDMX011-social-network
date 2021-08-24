// import { onNavigate } from '../main.js';

export const login = () => {
  const html = `
  <div id="login-page">
     <form class id='login' ="form-inicial">
       <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
       <h2 class="titles" id="title-form">Login</h2>
       <label for="email">Correo electronico</label>
       <input type="email" id="login-email" />
       <label for="password">Contraseña</label>
       <input type="password" id="login-password" />
       <button id="form-button">Enviar</button>
     </form>
     <div class="img-register-desktop">
       <img id="heart" src="img/heart.png" alt="heart" />
     </div>
   </div>
  `;
  const divLogin = document.createElement('div');
  divLogin.innerHTML = html;

  const auth = firebase.auth();
  const registerForm = divLogin.querySelector('#login');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('sign in');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  return divLogin;
};
