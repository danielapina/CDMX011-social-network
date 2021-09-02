// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
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

    <div id="home-page">
      <div class="banner">
        <p class="banner-welcome">
          Cuidar de la naturaleza es cuidar de nosotros.
        </p>
        <button class="btns-login btn-routing" id='btn-register-movil' value='/register'>¡Regístrate!</button>
      </div>
      <div class="process">
        <h2 id="title-process">¿Cómo Funciona?</h2>
        <div class="process-img">
          <img id="process-movil" src="img/process-movil.png" alt="register" />
          <img id="process-desktop" src="img/process-desktop.png" alt="register" />
        </div>
      </div>
    </div>
   
   `;

  const divHome = document.createElement('div');
  divHome.innerHTML = html;

  const btnRegister = divHome.querySelector('#btn-register');
  btnRegister.addEventListener('click', () => onNavigate('/register'));

  const btnLogin = divHome.querySelector('#btn-login');
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  const btnRegisterMovil = divHome.querySelector('#btn-register-movil'); // Esta apunta a divHome;
  btnRegisterMovil.addEventListener('click', () => onNavigate('/register'));

  // -------------------------------icon burguer
  divHome.querySelector('#users-icon').addEventListener('click', () => {
    const mostrar = divHome.querySelector('#navegacion').className;
    if (mostrar === '') {
      divHome.querySelector('#navegacion').setAttribute('class', 'show');
    } else {
      divHome.querySelector('#navegacion').removeAttribute('class', 'show');
    }
  });

  return divHome;
};
