import { signUp, getUser } from '../lib/firebaseClient.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const register = () => {
  const html = `
  <header>
  <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
  <span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>
  <div class="div-navegation">
    <ul id="navegacion">
      <li><a><button class="blue btn-routing" id="btn-register" value='/register'>¡Regístrate!</button></a></li>
      <li><a><button class="blue btn-routing" id="btn-login" value='/login'>Iniciar Sesión</button></a></li>
    </ul>
  </div>
 </header>
  <div id="register-page">
     <form id="register-form" class ="form-inicial" >
      <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
       <h2 class="titles" id="title-form">Registro</h2>
       <label for="email">Correo electrónico</label>
       <input type="email" id="user-email" placeholder='alguien@ejemplo.com'/>
       <label for="password">Contraseña</label>
       <div class = "show-passwords">
       <input type="password" id="user-password" placeholder='Mínimo 6 carácteres' />
       <span class = "eyes">
       <i id="show1" class="fas fa-eye" style="color: #0e6359;"></i>
       <i id="hide1" class="fas fa-eye-slash" style="color: #0e6359;"></i>
       </span>
       </div>
       <label for="password"> Confirma Contraseña</label>
       <div class = "show-passwords">
       <input type="password" id="confirm-password" placeholder='Mínimo 6 carácteres' />
       <span class = "eyes-confirm">
       <i id="show2" class="fas fa-eye" style="color: #0e6359;"></i>
       <i id="hide2" class="fas fa-eye-slash" style="color: #0e6359;"></i>
       </span>
       </div>
       <br>
       <p id="error-message-register"></p>
       <button id="form-button-register"class="submit-btn">Enviar</button>
       <button id="btn-google"class="submit-btn google"><img src="img/google.png" alt="google" id="google-icon">Regístrate</button>
     </form>
     <div class="img-register-desktop">
       <img id="madre-tierra" src="img/madreTierra.png" alt="MadreTierra" />
     </div>
   </div>
`;
  const divRegister = document.createElement('div');
  divRegister.innerHTML = html;

  const btnRegister = divRegister.querySelector('#btn-register');
  btnRegister.addEventListener('click', () => onNavigate('/register'));
  const btnLogin = divRegister.querySelector('#btn-login');
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  // -------------------------------icon burguer
  divRegister.querySelector('#users-icon').addEventListener('click', () => {
    const mostrar = divRegister.querySelector('#navegacion').className;
    if (mostrar === '') {
      divRegister.querySelector('#navegacion').setAttribute('class', 'show');
    } else {
      divRegister.querySelector('#navegacion').removeAttribute('class', 'show');
    }
  });

  const btnForm = divRegister.querySelector('#register-form');
  btnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divRegister.querySelector('#user-email').value;
    const password = divRegister.querySelector('#user-password').value;
    const confirmPassword = divRegister.querySelector('#confirm-password').value;
    if (password === confirmPassword) {
      signUp(email, password)
        .then(() => {
          onNavigate('/wall');
          console.log(getUser());
        })
        .catch((error) => {
          const errorMessage = error.message;
          divRegister.querySelector('#error-message-register').innerHTML = errorMessage;
        });
    } else {
      divRegister.querySelector('#error-message-register').innerHTML = 'Las Contraseñas no coinciden, vuelve a intentar.';
    }
  });

  // GOOGLE
  const auth = firebase.auth();
  const btnGoogle = divRegister.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Registro con google', result);
        onNavigate('/wall');
      })
      .catch((err) => { divRegister.querySelector('#error-message-register').innerHTML = err; });
  });

  // -------------------------------icon mostrar password
  divRegister.querySelector('.eyes').addEventListener('click', (e) => {
    e.preventDefault();
    const passwordInput = divRegister.querySelector('#user-password');
    const hide = divRegister.querySelector('#hide1');
    const show = divRegister.querySelector('#show1');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      hide.style.display = 'block';
      show.style.display = 'none';
    } else {
      passwordInput.type = 'password';
      hide.style.display = 'none';
      show.style.display = 'block';
    }
  });

  // -------------------------------icon mostrar confirm-password
  divRegister.querySelector('.eyes-confirm').addEventListener('click', (e) => {
    e.preventDefault();
    const passwordInput = divRegister.querySelector('#confirm-password');
    const hide = divRegister.querySelector('#hide2');
    const show = divRegister.querySelector('#show2');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      hide.style.display = 'block';
      show.style.display = 'none';
    } else {
      passwordInput.type = 'password';
      hide.style.display = 'none';
      show.style.display = 'block';
    }
  });

  return divRegister;
};
