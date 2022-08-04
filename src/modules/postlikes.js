const postLikes = async (movieId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6HeZU4qgzBNhrLzuH6I/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export default postLikes;