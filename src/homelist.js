/* eslint-disable */ 
import postLike from './postlikes.js';
import getLikes from './getlikes.js';

const mainDiv = document.querySelector('.main-div');

const likesCount = (target, likesArray, numOfLikes) => {
  likesArray.forEach((obj) => {
    if (obj.item_id === target.id) {
      numOfLikes.innerHTML = `${obj.likes} likes `;
    }
  });
};

const homeList = async (data) => {
  for (let i = 0; i <= data.length - 1; i += 1) {
    const listItem = document.createElement('div');
    listItem.id = data[i].idMeal;
    listItem.classList.add('list-item');

    const itemImage = document.createElement('div');
    itemImage.classList.add('item-image');

    const image = document.createElement('img');
    image.src = data[i].strMealThumb;

    itemImage.appendChild(image);

    const itemText = document.createElement('div');
    itemText.classList.add('item-text');

    const mealName = document.createElement('p');
    mealName.innerHTML = data[i].strMeal;

    const mealLikes = document.createElement('p');
    const numOfLikes = document.createElement('span');
    itemText.appendChild(mealName);
    itemText.appendChild(mealLikes);

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bi', 'bi-heart', 'like-btn');
    likeBtn.id = data[i].idMeal;

    const button = document.createElement('button');
    button.setAttribute('class', 'comment-btn');
    button.setAttribute('id', `${data[i].idMeal}`);
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    button.innerHTML = 'comments';

    mealLikes.appendChild(numOfLikes);
    mealLikes.appendChild(likeBtn);

    listItem.appendChild(itemImage);
    listItem.appendChild(itemText);
    itemText.appendChild(button);

    mainDiv.appendChild(listItem);

    const likesArray = await getLikes();
    likesCount(likeBtn, likesArray, numOfLikes);

    likeBtn.addEventListener('click', async (e) => {
      await postLike(e.target.id);
      const newLikes = await getLikes();

      likesCount(e.target, newLikes, numOfLikes);
    });
  }
};

export default homeList;