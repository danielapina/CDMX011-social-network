const firebaseConfig = {
  apiKey: 'AIzaSyAkNdxq3vmaFtbmmT1grzUMxp0rwwpgW9A',
  authDomain: 'red-social-ee6aa.firebaseapp.com',
  databaseURL: 'https://red-social-ee6aa-default-rtdb.firebaseio.com',
  projectId: 'red-social-ee6aa',
  storageBucket: 'red-social-ee6aa.appspot.com',
  messagingSenderId: '98006263640',
  appId: '1:98006263640:web:c49709e798416c48a6272d',
  measurementId: 'G-VQ3NQNZDJ0',
};

firebase.initializeApp(firebaseConfig);

export const signUp = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;
