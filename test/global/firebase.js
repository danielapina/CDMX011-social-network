global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  auth: () => ({
    signInWithEmailAndPassword: () => console.log('hi signIn'),
  }),
};
