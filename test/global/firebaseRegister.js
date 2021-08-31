global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  auth: () => ({
    createUserWithEmailAndPassword: () => Promise.resolve(),
  }),
};
