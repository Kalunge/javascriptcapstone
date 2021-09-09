const displayComment = async (id) => {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments?item_id=${id}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return false;
  }
};

export default displayComment;
