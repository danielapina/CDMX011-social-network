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
      <div>
        <button id="btn-post">Crear publicación</button>
        <button id="load-post">Todos los post</button>
      </div>
      <div id="post-container"></div>
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
  const postContainer = divWall.querySelector('#post-container');
  const btnAllPost = divWall.querySelector('#load-post');
  // btnReturnWall.addEventListener('click', (e) => {

  // const getPost = () => dataBase.collection('post').get();
  const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);

  btnAllPost.addEventListener('click', async (e) => {
    onGetPost((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());

        const data = doc.data();

        postContainer.innerHTML += `<div>
        <h3>${data.user}</h3> 
        <h3>${data.topic}</h3>
         <p>${data.idea}</p>
         <div>
          <button id ='btn-delete'>Eliminar</button>
          <button id ='btn-edit'>Editar</button>
         </div>
         </div>`;
      });
    });
    console.log(`ENTREEEE${e}`);
    // console.log(posts);
  });

  return divWall;
};
