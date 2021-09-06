import firebase from './secret.js';

export const db = firebase.firestore();

export const getAllPost = () => db.collection('post');

// -------------------------------posts------------------

export const newPost = (user, topic, idea) => db.collection('post').doc().set({
  datePublic: new Date(),
  user,
  topic,
  idea,
  likes: [],
});
export const getThePost = (id) => db.collection('post').doc(id).get();
export const deletePost = (id) => db.collection('post').doc(id).delete();
