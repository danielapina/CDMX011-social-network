import firebase from './secret.js';

export const db = firebase.firestore();

export const getAllPost = () => db.collection('post');
