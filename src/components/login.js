//import { onNavigate } from '../main.js';

export const login = () => {
  const html = `
  <p>Aqui esta el Login</p>
  `;
  const divLogin = document.createElement('div');
  divLogin.innerHTML = html;

  return divLogin;
};
