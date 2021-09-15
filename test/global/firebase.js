global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  firestore: () => console.log('hi firebase'),
  auth: () => ({
    signInWithEmailAndPassword: () => Promise.resolve(),
    createUserWithEmailAndPassword: () => Promise.resolve(),
    onAuthStateChanged: () => Promise.resolve(),
  }),
};
