import displayData from './display.js';

const fetchAPI = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=documentary&limit=12&sort_by=download_count')
    .then((response) => response.json())
    .then((json) => displayData(json.data.movies));
};

export default fetchAPI;