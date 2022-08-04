const getLikes = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6HeZU4qgzBNhrLzuH6I/likes');
  const result = await res.json();
  return result;
};

export default getLikes;