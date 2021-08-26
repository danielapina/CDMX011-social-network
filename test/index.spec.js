/**
 * @jest-environment jsdom
 */
import { home } from '../src/components/home.js';

describe('Coleccion de test sobre HOME', () => {
  test('Button register', () => {
    const homeRender = home();
    console.log(homeRender.outerHTML);
  });
});
