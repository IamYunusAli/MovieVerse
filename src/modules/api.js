import displayData, { data } from './display.js';
import { displayPopup } from './popup.js';
import postLikes from './postlikes.js';
import getLikes from './getlikes.js';

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
  const heart = document.querySelectorAll('.LikeBtn');
  heart.forEach(async (element) => {
    element.addEventListener('click', async () => {
      await postLikes(element.id);
      const value = Number(element.childNodes[3].innerText);
      element.childNodes[3].innerText = value + 1;
    });
    const newlikes = await getLikes();
    newlikes.forEach((likes) => {
      if (element.id === likes.item_id) {
        element.childNodes[3].innerText = likes.likes;
      }
    });
  });
};

export default fetchAPI;