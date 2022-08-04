/** @jest-environment jsdom */
import fetchAPI from '../modules/api.js';
import displayData from '../modules/display.js';

describe('Add tests for items counter', () => {
  test('check counter equals movielist', () => {
    document.addEventListener('DOMContentLoaded', async () => {
      const movielist = document.querySelectorAll('.movielist');
      const mcounter = document.querySelector('.mcounter').innerHTML;
      const response = await fetchAPI();
      displayData(response);
      expect(mcounter).toBe(movielist.length);
    });
  });
});