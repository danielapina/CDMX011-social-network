global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  auth: () => ({
    signInWithEmailAndPassword: () => Promise.resolve(),
  }),
};
