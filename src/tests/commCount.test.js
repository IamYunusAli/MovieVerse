/** @jest-environment jsdom */
import displayData, { data } from '../modules/display.js';
import get from '../modules/addGetComm.js';
import { displayPopup, length } from '../modules/popup.js';
import fetchAPI from '../modules/api.js';

const id = 8333;
describe('test comment counter', () => {
  test('check comments length equals <h2> count', () => {
    document.addEventListener('DOMContentLoaded', async () => {
      const response = await fetchAPI();
      displayData(response);
      await displayPopup(data, id);
      const text = document.querySelector('.comm-length').textContent;
      const Apicount = await length(get(id));
      expect(text).toBe(`Comments(${Apicount})`);
    });
  });
});