import firebase from './secret.js';

export const db = firebase.firestore();
export const getAllPost = () => db.collection('post');

/* -------------------------------posts--------------------- */

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const today = new Date();
const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();
const allDate = `${day} / ${month} / ${year}`;

export const newPost = (userUid, user, topic, idea) => db.collection('post').doc().set({
  dateComparative: new Date(),
  datePublic: allDate,
  userUid,
  user,
  topic,
  idea,
  likes: [],
});
export const getThePost = (id) => db.collection('post').doc(id).get(); // Trae el post para ver el contenido
export const deletePost = (id) => db.collection('post').doc(id).delete();// Eliminar el post
export const updatePost = (id, updatePostContent) => db.collection('post').doc(id).update(updatePostContent);// Editar el post
