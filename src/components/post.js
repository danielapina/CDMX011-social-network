// import { onNavigate } from './main.js';

export const post = () => {
  const html = `
    <header>
        <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
        <span class="menu-icon" id="users-icon"><img id="img-users" src="img/users.png" alt=""></span>

        <nav class="div-navegation">
            <button class="btn-routing" id="btn-exit">Cerrar sesión</button>
            <img id="logout-movil" src="img/logout.png" alt="cerrar sesion">
        </nav>
    </header>
    <div id="post">
        <form>
            <img class="cloud-bg" src="img/nubes-movil.png" alt="nubes" />
            <img class="cloud-bg" src="img/nubes-desktop.png" alt="nubes" />
            <h2 class="titles">Crear publicación</h2>
            <label for="select">Temática</label>
            <select name="select">
            <option hidden selected>Selecciona una opción</option>
                <option value="recycle">Reciclaje</option>
                <option value="diy">Hazlo tu mismo</option>
                <option value="product">Productos ecológicos</option>
                <option value="organic">Orgánicos</option>
                <option value="enviroment">Medio ambiente</option>
            </select>
            <label for="text-post">Coloca tu idea ecofriendly</label>
            <textarea name="textarea" rows="10" cols="40"id="text-post">Escribe aquí tus ideas!</textarea>
            <button class="btn-routing" id="btn-return">Regresar</button>
            <button class="btn-routing" id="btn-post">Publicar</button>
        </form>
    </div>
    `;
  const divPost = document.createElement('div');
  divPost.innerHTML = html;

  return divPost;
};
