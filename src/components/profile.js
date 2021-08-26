// import { onNavigate } from './main.js';

export const profile = () => {
  const html = `
  <header>
  <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
  <span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>

  <div class="div-navegation">
    <ul id="navegacion">
      <li><a><button class="blue btn-routing" id="btn-exit" value='/login'>Salir</button></a></li>
    </ul>
  </div>
</header>
         <h2>Profile</h2>
  `;
  const divProfile = document.createElement('div');
  divProfile.innerHTML = html;

  return divProfile;
};
