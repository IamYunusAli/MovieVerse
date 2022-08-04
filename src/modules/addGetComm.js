const appId = 'j6HeZU4qgzBNhrLzuH6I';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const add = async (id, name, message) => {
  const response = await fetch(commentUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const get = async (id) => {
  try {
    const res = await fetch(`${commentUrl}?item_id=${id}`);
    const result = await res.json();
    return result;
  } catch (error) {
      return [];
  }
};

export { add, get };