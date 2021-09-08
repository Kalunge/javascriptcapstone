

import postLike from './postlikes.js';
import getLikes from './getlikes.js';

const mainDiv = document.querySelector('.main-div');

const getLikesCount = (target, likesArray, numOfLikes) => {
  likesArray.forEach(obj => {
    if (obj.item_id === target.id){
      numOfLikes.innerHTML = `${obj.likes} likes `;
  }  
  })
};

const  homeList =  async (data) => {

for (let i = 0; i <= data.length - 1; i += 1) {
 const listItem = document.createElement('div');
 listItem.id = data[i].idMeal
 listItem.classList.add('list-item');

 const itemImage = document.createElement('div')
 itemImage.classList.add('item-image');

 const image = document.createElement('img')
 image.src = data[i].strMealThumb
 
 itemImage.appendChild(image)


 const itemText = document.createElement('div');
 itemText.classList.add('item-text');

 const mealName = document.createElement('p');
 mealName.innerHTML = data[i].strMeal

 const mealLikes = document.createElement('p')
 const numOfLikes = document.createElement('span');
 itemText.appendChild(mealName)
 itemText.appendChild(mealLikes)
 
 const likeBtn = document.createElement('i');
 likeBtn.classList.add("bi", "bi-heart", "like-btn")
 likeBtn.id =  data[i].idMeal
 
  mealLikes.appendChild(numOfLikes)
  mealLikes.appendChild(likeBtn)

  listItem.appendChild(itemImage);
  listItem.appendChild(itemText);

  mainDiv.appendChild(listItem)

  const likesArray =  await getLikes();
  getLikesCount(likeBtn, likesArray, numOfLikes);


  };

};


export default homeList;