// const addComment = async (formData) => {
//   const response = await fetch(
//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/comments/',
//     {
//       method: 'POST',
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     },
//   );

//   const result = await response.json();
//   console.log(result);
// };

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

// export default addComment;
