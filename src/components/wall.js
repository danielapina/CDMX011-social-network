/* eslint-disable import/no-cycle */
import { signOut, getUser } from '../lib/firebaseClient.js';
import { onNavigate } from '../main.js';
import { getAllPost } from '../lib/posts.js';

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
  // aqui cargan todo lo post
  getAllPost().onSnapshot((allpost) => {
    const documents = [];
    allpost.forEach((doc) => {
      documents.push({ id: doc.id, infopost: doc.data() });
    });
    documents.forEach((thePost) => {
      const { topic, idea, user } = thePost.infopost;
      postContainer.innerHTML += `<div class="div-post">
        <h3>${user}</h3> 
        <h4>Temática: ${topic}</h4>
         <p>${idea}</p>
         <div>
          
         </div>
         </div>`;
    });
  });

  // const getPost = () => dataBase.collection('post').get();
  const getThePost = (id) => dataBase.collection('post').doc(id).get();

  const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);

  const deletePost = (id) => dataBase.collection('post').doc(id).delete();

  btnAllPost.addEventListener('click', async (e) => {
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(doc.data());

        const dataPost = doc.data();
        dataPost.id = doc.id;

        postContainer.innerHTML += `<div class="div-post">
        <h3>${dataPost.user}</h3> 
        <h4>Temática: ${dataPost.topic}</h4>
         <p>${dataPost.idea}</p>
         <div>
          <button class ='btn-delete' data-id="${dataPost.id}" >Eliminar</button>
          <button class ='btn-edit 'data-id="${dataPost.id}">Editar</button>
         </div>
         </div>`;

        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async (ele) => {
            await deletePost(ele.target.dataset.id);
          });
        });
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (ele) => {
            const thePost = await getThePost(ele.target.dataset.id);
            console.log(thePost.data());
          });
        });
      });
    });
    console.log(`ENTREEEE${e}`);
    // console.log(posts);
  });

  return divWall;
};
