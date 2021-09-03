import firebase from './secret.js';

const db = firebase.firestore();

export const getAllPost = () => db.collection('post');
