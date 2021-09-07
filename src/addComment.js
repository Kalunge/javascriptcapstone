const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';

const addComment = async (itemId, username, comment) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify({
      itemId,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  console.log(result);
};

export default addComment;
