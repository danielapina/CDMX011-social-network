// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  const html = `
  <header>
  <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
  <span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>

  <div class="div-navegation">
    <ul id="navegacion">
      <li><a><button class="blue btn-routing" id="btn-register" value='/register'>¡Regístrate!</button></a></li>
      <li><a><button class="blue btn-routing" id="btn-login" value='/login'>Login</button></a></li>
    </ul>
  </div>
</header>

  <div id="login-page">
     <form  id="login-form" class ="form-inicial">
       <h2 class="titles" id="title-form">¡Hola Green Friend!</h2>
       <img id="heart-movil" src="img/heart.png" alt="heart" />
       <label for="email">Correo electronico</label>
       <input type="email" id="login-email" placeholder='alguien@ejemplo.com'/>
       <label for="password">Contraseña</label>
       <input type="password" id="login-password" placeholder="******"/>
       <br>
       <button id="form-button" class="submit-btn">Enviar</button>
       <button id="btn-google"class="submit-btn google"><img src="img/google.png" alt="google" id="google-icon">Login</button>
     </form>
     <div class="img-register-desktop">
       <img id="heart" src="img/heart.png" alt="heart" />
     </div>
   </div>
  `;
  const divLogin = document.createElement('div');
  divLogin.innerHTML = html;

  const btnRegister = divLogin.querySelector('#btn-register');
  btnRegister.addEventListener('click', () => onNavigate('/register'));
  const btnLogin = divLogin.querySelector('#btn-login');
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  const loginForm = divLogin.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divLogin.querySelector('#login-email').value;
    const password = divLogin.querySelector('#login-password').value;
    console.log(email, password);

    const auth = firebase.auth();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        onNavigate('/profile');
        console.log(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  // GOOGLE
  const auth = firebase.auth();
  const btnGoogle = divLogin.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Registro con google', result);
        onNavigate('/profile');
      })
      .catch((err) => { alert(err); });
  });

  return divLogin;
};
