/* eslint-disable import/no-cycle */
import { signOut, getUser } from '../lib/firebaseClient.js';
import { onNavigate } from '../main.js';

export const wall = () => {
  const html = `
  <header>
        <a href="/"><img src="img/logo-desktop.png" alt="logotipo" id="logoGF" /></a>
        <span class="menu-icon" id="logout-movil-wall"><img id="img-users" src="img/logout.png" alt="cerrar sesion"></span>
        
        <nav class="div-navegation">
            <button class="btn-roting beige" id="btn-exit-wall">Cerrar sesión</button>
        </nav>
    </header>
    <section id="wall">
      <div id="welcome-wall">
      <img src="img/guacamayo.png" alt="" id="wall-image">
      <p id="message-welcome">Bienvenido <span id='user-email-welcome'></span> !!</p>
      </div>
      <button id="btn-post">Crear publicación</button>
    </section>
  `;
  const divWall = document.createElement('div');
  divWall.innerHTML = html;

  if (getUser() === null) {
    onNavigate('/');
    alert('Inicia Sesion');
  } else {
    const emailWelcome = divWall.querySelector('#user-email-welcome');
    emailWelcome.innerHTML = getUser().email;

    const btnExit = divWall.querySelector('#btn-exit-wall');
    btnExit.addEventListener('click', (event) => {
      event.preventDefault();
      signOut();
      onNavigate('/');
    });

    const btnExitMovil = divWall.querySelector('#logout-movil-wall');
    btnExitMovil.addEventListener('click', (e) => {
      e.preventDefault();
      signOut();
      onNavigate('/');
    });

    const btnNewPost = divWall.querySelector('#btn-post');
    btnNewPost.addEventListener('click', (event) => {
      event.preventDefault();
      onNavigate('/post');
    });
  }
  const dataBase = firebase.firestore();
  const getPost = () => dataBase.colletion('post').get();
  window.addEventListener('DOMContentLoaded', async (e) =>{
    e.preventDefault();
    const posts = await getPost();
    console.log(posts);
  });

  return divWall;
};
