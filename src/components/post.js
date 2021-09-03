/* eslint-disable import/no-cycle */
import { getUser, signOut } from '../lib/firebaseClient.js';
import { onNavigate } from '../main.js';

export const post = () => {
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
                <option value="recycle">Reciclaje</option>
                <option value="diy">Hazlo tu mismo</option>
                <option value="product">Productos ecológicos</option>
                <option value="organic">Orgánicos</option>
                <option value="enviroment">Medio ambiente</option>
            </select>
            <label for="text-post">Coloca tu idea ecofriendly</label>
            <textarea required id ='idea-post' name="textarea" rows="10" cols="40"id="text-post" placeholder = 'Escribe aquí tus ideas!' autofocus></textarea>
            <div class ='btns-post'>
            <button class="btn-routing" id="btn-return">Regresar</button>
            <button type='submit' class="btn-routing" id="btn-post">Publicar</button>
            </div>
        </form>
        <div id="post-container"></div>
    </div>
    `;
  const divPost = document.createElement('div');
  divPost.innerHTML = html;

  const btnExit = divPost.querySelector('#btn-exit');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
    onNavigate('/');
  });

  const btnExitMovil = divPost.querySelector('#logout-movil');
  btnExitMovil.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    onNavigate('/');
  });

  const btnReturnWall = divPost.querySelector('#btn-return');
  btnReturnWall.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/wall');
  });
  // -------------------------------posts------------------
  const dataBase = firebase.firestore();
  const formPost = divPost.querySelector('#form-post');
  const postContainer = divPost.querySelector('#post-container');
  const newPost = (user, topic, idea) => dataBase.collection('post').doc().set({
    user,
    topic,
    idea,
  });

  const getPost = () => dataBase.colletion('post').get();
  window.addEventListener('DOMContentLoaded', async (e) => {
    console.log(e);
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());

      const data = doc.data();

      postContainer.innerHTML += `<div>
      <h3>${data.topic}</h3>
      </div>`;
    });
    // console.log(posts);
  });

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const topic = formPost['topic-post'];
    const idea = formPost['idea-post'];
    const user = getUser().email;

    await newPost(user, topic.value, idea.value);

    // onNavigate('/wall');
    // console.log(user, topic, idea);
  });
  return divPost;
};
