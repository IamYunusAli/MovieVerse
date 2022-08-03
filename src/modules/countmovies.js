const countmovie = async () => {
  const res = await fetch('https://yts.mx/api/v2/list_movies.json?genre=documentary&limit=12&sort_by=download_count');
  const result = await res.json();
  const len = result.data.movies.length;
  const allmovie = document.querySelector('.mcounter');
  allmovie.textContent = len;
};

export default countmovie;