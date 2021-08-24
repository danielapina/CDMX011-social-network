// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const register = () => {
  const html = `
  <div id="register-page">
     <form class ="form-inicial">
       <img class="leaf-img" src="img/leafs-desktop.png" alt="leafs" />
       <h2 class="titles" id="title-form">Registro</h2>
       <label for="email">Correo electronico</label>
       <input type="email" id="user-email" />
       <label for="password">Contraseña</label>
       <input type="password" id="user-password" placeholder='Minimo 6 caracteres' />
       <button id="form-button">Enviar</button>
       <button id="btn-google">GOOGLE</button>
     </form>
     <div class="img-register-desktop">
       <img id="madre-tierra" src="img/madreTierra.png" alt="MadreTierra" />
     </div>
   </div>
`;
  const divRegister = document.createElement('div');
  divRegister.innerHTML = html;

  const auth = firebase.auth();
  const registerForm = divRegister.querySelector('.form-inicial');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    console.log(email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        onNavigate('/login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  // GOOGLE
  const btnGoogle = divRegister.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Registro con google');
      })
      .catch((err) => { console.log(err); });
  });

  return divRegister;
};
