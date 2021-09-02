// import { onNavigate } from './main.js';

export const wall = () => {
  const html = `
  <header>
        <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
        <span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>

        <nav class="div-navegation">
            <button class="btn-roting beige" id="btn-exit">Cerrar sesión</button>
            <img id="logout-movil"src="img/logout.png" alt="cerrar sesion">
        </nav>
    </header>
    <section id="wall">
      <div id="welcome-wall">
      <img src="img/guacamayo.png" alt="" id="wall-image">
      <p id="message-welcome">Bienvenido </p>
      </div>
      <button id="btn-post">Crear publicación</button>
    </section>
  `;
  const divWall = document.createElement('div');
  divWall.innerHTML = html;

  return divWall;
};
