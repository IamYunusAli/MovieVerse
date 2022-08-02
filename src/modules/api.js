import displayData, { data } from './display.js';
import displayPopup from './popup.js';

const fetchAPI = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=documentary&limit=12&sort_by=download_count')
    .then((response) => response.json())
    .then((json) => displayData(json.data.movies));

  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      //console.log(data);
      displayPopup(data, e.target.id);
    });
  });
};

export default fetchAPI;