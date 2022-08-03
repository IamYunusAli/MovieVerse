const getLikes = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AteFeVtswifKjbiMpX22/likes');
  const result = await res.json();
  return result;
};

export default getLikes;