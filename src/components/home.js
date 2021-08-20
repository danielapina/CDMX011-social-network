// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const rootDiv = document.getElementById('root');
  const html = `
    <div id="home-page">
      <div class="banner">
        <p class="banner-welcome">
          Cuidar de la naturaleza es cuidar de nosotros.
        </p>
        <button class="btns-login btn-routing" value='/register'>¡Regístrate!</button>
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
  const btnRegister = document.getElementById('btn-register');
  btnRegister.addEventListener('click', () => onNavigate('/register'));

  const divHome = document.createElement('div');
  divHome.innerHTML = html;
  rootDiv.appendChild(divHome);

  return rootDiv;
};
