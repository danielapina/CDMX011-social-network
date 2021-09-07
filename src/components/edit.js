import { signOut } from '../lib/firebaseClient.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { updatePost } from '../lib/posts.js';

export const edit = (id, topic, idea) => {
  const html = `
      <header>
          <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
          <span class="menu-icon" id="logout-movil"><img id="img-users" src="img/logout.png" alt="cerrar sesion"></span>
  
          <nav class="div-navegation">
              <button class="btn-routing beige" id="btn-exit">Cerrar sesión</button>
          </nav>
      </header>
      <div id="post">
          <form class ="form-inicial" id="form-post">
              <img id="nubes-movil" class="cloud-bg" src="img/nubes-movil.png" alt="nubes" />
              <img id="nubes-desktop" class="cloud-bg" src="img/nubes-desktop.png" alt="nubes" /> 
              <h2 class="titles">Crear publicación</h2>
              <label for="select">Temática</label>
              <select name="select" id='topic-post'>
              <option hidden selected>Selecciona una opción</option>
                  <option value="Reciclaje">Reciclaje</option>
                  <option value="Hazlo tu mismo">Hazlo tu mismo</option>
                  <option value="Productos ecológicos">Productos ecológicos</option>
                  <option value="Orgánicos">Orgánicos</option>
                  <option value="Medio ambiente">Medio ambiente</option>
              </select>
              <label for="text-post">Coloca tu idea ecofriendly</label>
              <textarea required id ='idea-post' name="textarea" rows="10" cols="40"id="text-post" placeholder = 'Escribe aquí tus ideas!' autofocus></textarea>
              <div class ='btns-post'>
              <button class="btn-routing" id="btn-return-edit">Cancelar</button>
              <button type='submit' class="btn-routing" id="btn-update">Guardar</button>
              </div>
          </form>
          <div id="post-container"></div>
      </div>
      `;
  const divEdit = document.createElement('div');
  divEdit.innerHTML = html;

  const btnExit = divEdit.querySelector('#btn-exit');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
    onNavigate('/');
  });

  const btnExitMovil = divEdit.querySelector('#logout-movil');
  btnExitMovil.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    onNavigate('/');
  });

  const btnReturnWall = divEdit.querySelector('#btn-return-edit');
  btnReturnWall.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/wall');
  });
  // -------------------------------posts------------------

  const formPost = divEdit.querySelector('#form-post');

  formPost['topic-post'].value = topic;
  formPost['idea-post'].value = idea;
  console.log(`aquii estoy ${topic} ${idea}`);
  const btnUpdate = divEdit.querySelector('#btn-update');
  btnUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTopic = formPost['topic-post'];
    const newIdea = formPost['idea-post'];
    await updatePost(id, {
      topic: newTopic.value,
      idea: newIdea.value,
    });
    console.log(id, newTopic.value, newIdea.value);
    // onNavigate('/wall');
  });

  return divEdit;
};
