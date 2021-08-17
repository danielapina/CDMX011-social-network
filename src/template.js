export default {
  '/': `
  <main>
    <div id="home-page">
      <div class="banner">
        <p class="banner-welcome">
          Cuidar de la naturaleza es cuidar de nosotros.
        </p>
        <button class="btns-login">¡Regístrate!</button>
      </div>
      <div class="process">
        <h2 id="title-process">¿Cómo Funciona?</h2>
        <div class="process-img">
          <img id="process-movil" src="img/process-movil.png" alt="register" />
        </div>
      </div>
    </div>
  </main>
`,
  '/register':
    `
    <main>
         <div id="register-page">
            <form id="register-form">
              <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
              <h2 class="titles" id="title-form">Registro</h2>
              <label for="user-name">Nombre de usuario</label>
              <input type="text" id="user-name" />
              <label for="email">Correo electronico</label>
              <input type="email" id="user-email" />
              <label for="password">Contraseña</label>
              <input type="password" id="user-password" />
              <label for="confirm-password">Confirmar contraseña</label>
              <input type="confirm-password" id="confirm-password" />
              <button id="form-button">Enviar</button>
            </form>
            <div class="img-register-desktop">
              <img id="madre-tierra" src="img/madreTierra.png" alt="MadreTierra" />
            </div>
          </div>
        </main>
    `,
};
