export default async (formData) => {
  try {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments/',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      },
    );
    await res.json();

    return true;
  } catch (error) {
    return error;
  }
};
