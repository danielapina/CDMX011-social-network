import { onNavigate } from '../main.js';

export const register = () => {
  const html = `
  <div id="register-page">
     <form class ="form-inicial" >
      <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
       <h2 class="titles" id="title-form">Registro</h2>
       <label for="email">Correo electronico</label>
       <input type="email" id="user-email" placeholder='alguien@ejemplo.com'/>
       <label for="password">Contraseña</label>
       <input type="password" id="user-password" placeholder='Mínimo 6 carácteres' />
       <label for="password"> Confirma Contraseña</label>
       <input type="password" id="confirm-password" placeholder='Mínimo 6 carácteres' />
       <br>
       <button id="form-button"class="submit-btn">Enviar</button>
       <button id="btn-google"class="submit-btn google"><img src="img/google.png" alt="google" id="google-icon">Sign Up</button>
     </form>
     <div class="img-register-desktop">
       <img id="madre-tierra" src="img/madreTierra.png" alt="MadreTierra" />
     </div>
   </div>
`;
  const btnRegister = document.getElementById('btn-register');
  btnRegister.addEventListener('click', () => onNavigate('/register'));

  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => onNavigate('/login'));

  const divRegister = document.createElement('div');
  divRegister.innerHTML = html;

  function sendUser() {
    const email = divRegister.querySelector('#user-email').value;
    const password = divRegister.querySelector('#user-password').value;
    const confirmPassword = divRegister.querySelector('#confirm-password').value;
    console.log(`Email: ${email}Password: ${password} Password: ${confirmPassword}`);

    if (password === confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          console.log(user);
          onNavigate('/profile');

        // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        // ..
        });
    }else{
      alert('Las Contraseñas no coinciden, vuelve a intentar.');
    }
  }
  // GOOGLE
  const auth = firebase.auth();
  const btnGoogle = divRegister.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Registro con google');
        onNavigate('/profile');
      })
      .catch((err) => { alert(err); });
  });

  const btnForm = divRegister.querySelector('#form-button');
  btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    sendUser();
  });

  return divRegister;
};
