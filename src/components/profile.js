// import { onNavigate } from './main.js';

export const profile = () => {
    const html = `
         <h2>Profile</h2>
  `;
    const divProfile = document.createElement('div');
    divProfile.innerHTML = html;

    return divProfile;
};
