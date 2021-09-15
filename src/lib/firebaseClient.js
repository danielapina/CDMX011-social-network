import firebase from './secret.js';

export const signUp = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;

export const dataBase = () => firebase.firestore();
