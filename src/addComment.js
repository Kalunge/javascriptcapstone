const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments';

const addComment = async () => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify({
      item_id: 'item100',
      username: 'titoh',
      comment: 'great item',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  console.log(result);
};

export default addComment;
