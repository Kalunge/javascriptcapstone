const postLike = async (mealId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export default postLike;