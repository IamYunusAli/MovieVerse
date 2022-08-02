import displayData from './display.js';
import displayPopup from './popup.js';
import { data } from './display';

const fetchAPI = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=documentary&limit=12&sort_by=download_count')
    .then((response) => response.json())
    .then((json) => displayData(json.data.movies));

  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      displayPopup(data, e.target.id);
    });
  });

};

export default fetchAPI;