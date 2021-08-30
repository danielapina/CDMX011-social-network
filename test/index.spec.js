/**
 * @jest-environment jsdom
 */
import './global/firebase.js';
import { login } from '../src/components/login.js';

describe('login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('should render', () => {
    const rootDiv = document.getElementById('root');
    const component = login();
    rootDiv.appendChild(component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
