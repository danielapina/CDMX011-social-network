import { onNavigate } from '../main.js';

export const login = () => {
  const rootDiv = document.getElementById('root');
  const html = `
  <p>Aqui esta el Login</p>
  `;
  const divLogin = document.createElement('div');
  divLogin.innerHTML = html;
  rootDiv.appendChild(divLogin);

  return rootDiv;
};
