// const getLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes')
//   .then((response) => response.json())
//   .then((data) => data);

// export default getLikes;



const getLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8WhiXHgGMaGrsfo6vYsR/likes');
    return response.json();
  };

  export default getLikes;