/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { signOut, getUser } from '../lib/firebaseClient.js';
import { onNavigate } from '../main.js';
import { edit } from './edit.js';
import {
  getAllPost, getThePost, deletePost, updatePost,
} from '../lib/posts.js';

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
      <div id ="go-to-profile">
      <img class="guacamayo-movil" src="img/guacamayo.png" alt="">
      <img class="erizo-desktop" src="img/erizo.png" alt="profile-pic">
      </div>
      <p id="message-welcome"> ¡Bienvenido <span id='user-email-welcome'></span>!</p>
      </div>
      <div>
        <button id="btn-post">Crear publicación</button>
      </div>
      <div id="post-container"></div>
    </section>
  `;
  /* Div contenedor del template string */
  const divWall = document.createElement('div');
  divWall.innerHTML = html;
  /* E-mail que se muestra como saludo */
  const emailWelcome = divWall.querySelector('#user-email-welcome');
  emailWelcome.innerHTML = getUser().email;
  /* Botón cerrar sesion desktop */
  const btnExit = divWall.querySelector('#btn-exit-wall');
  btnExit.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
    onNavigate('/');
  });
  /* Botón cerrar sesion movil */
  const btnExitMovil = divWall.querySelector('#logout-movil-wall');
  btnExitMovil.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    onNavigate('/');
  });
  /* Botón crear publicación */
  const btnNewPost = divWall.querySelector('#btn-post');
  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/post');
  });
  /* Botón que te lleva al perfil  "imágenes" */
  const btnProfile = divWall.querySelector('#go-to-profile');
  btnProfile.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/profile');
  });

  /* Aquí cargan todos los post */
  const postContainer = divWall.querySelector('#post-container');
  // onSnapshot para que lo traiga en tiempo real
  getAllPost().onSnapshot((allpost) => {
    const documents = [];
    allpost.forEach((doc) => {
      documents.push({ id: doc.id, infopost: doc.data() });
    });
    /* Las comillas vacías son para que se actualice y no sobreescriba. */
    postContainer.innerHTML = '';
    const documentOrder = documents.sort((post1, post2) => post2.infopost.dateComparative - post1.infopost.dateComparative);
    documentOrder.forEach((eachPost) => {
      const {
        topic, idea, user, datePublic, likes,
      } = eachPost.infopost;
      const id = eachPost.id;
      const likesEmail = likes.length;
      /* Se muestra en pantalla cada uno de los post */
      postContainer.innerHTML += `<div class="div-post">
        <h3>${user}</h3> 
        <span class="date-public">${datePublic}</span>
        <h4>Temática: ${topic}</h4>
         <p>${idea}</p>
         <div class= "div-editPost">
         <img class="like count-likes" src="img/likes.png" alt="like" data-id="${id}"><span class="like-counter"><span class="me-encorazona">${likesEmail} </span>Me Encorazona</span>
         <img class ='btn-delete btn-wall-movil' id="${user}" data-id="${id}" src="img/bote-de-basura.png">
         <button class ='btn-delete btn-wall' id="${user}" data-id="${id}" >Eliminar</button>
         <img class ='btn-edit btn-wall-movil' id="${user}"  data-id="${id}" src="img/lapiz.png">
         <button class ='btn-edit btn-wall' id="${user}"  data-id="${id}">Editar</button>
         </div>
         </div>
        `;
    });

    const usermail = getUser().email;

    const btnsDelete = document.querySelectorAll('.btn-delete');

    /* Ocultamos los botones de delete si no le pertenecen al usuario logueado */
    btnsDelete.forEach((elems) => {
      if (usermail !== elems.id) {
        // eslint-disable-next-line no-param-reassign
        elems.style.visibility = 'hidden';
      }
    });

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async (ele) => {
        const result = window.confirm('¿Estás seguro de querer eliminar el post?');
        if (result === true) {
          await deletePost(ele.target.dataset.id);
        }
      });
    });
    /* Ocultamos los botones de edit si no le pertenecen al usuario logueado */
    const btnsEdit = document.querySelectorAll('.btn-edit');
    const rootDiv = document.getElementById('root');

    btnsEdit.forEach((elems) => {
      if (usermail !== elems.id) {
        // eslint-disable-next-line no-param-reassign
        elems.style.visibility = 'hidden';
      }
    });
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (ele) => {
        const thePost = await getThePost(ele.target.dataset.id);
        const post = thePost.data();
        const id = thePost.id;
        /* Limpia el espacio del template y solo te muestra el form editar */
        while (rootDiv.firstChild) { // Si contiene información
          rootDiv.removeChild(rootDiv.firstChild);
        }
        rootDiv.appendChild(edit(id, post.topic, post.idea));
      });
    });
    /* Contador de likes */
    const countLikes = document.querySelectorAll('.count-likes');
    countLikes.forEach((bttn) => {
      bttn.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        getThePost(id)
          .then((doc) => {
            if (doc.data().likes.includes(usermail)) {
              return updatePost(id, {
                likes: firebase.firestore.FieldValue.arrayRemove(usermail),
              });
            }
            return updatePost(id, {
              likes: firebase.firestore.FieldValue.arrayUnion(usermail),
            });
          })
          .catch((error) => {
            console.log('Error getting document:', error);
          });
      });
    });
  });
  return divWall;
};
