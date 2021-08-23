//import { onNavigate } from './main.js';

export const register = () => {
  const html = `
  <div id="register-page">
     <form id="register-form">
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

  return divRegister;
};
