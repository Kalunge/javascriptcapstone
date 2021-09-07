const homeList = (data) => {
  const mainDiv = document.querySelector('.main-div');

  data.forEach((element) => {
    const listItem = `<div class='list-item '>
    <div class="item-image">
      <div class="item-image">
        <img src=${element.strMealThumb}  alt="">
      </div>
      <div class="item-text">
        <p>${element.strMeal}</p>
        <p>Likes</p>
        <button class='comment-btn'>comment</button>
      </div>
    </div>
  </div>`;

    mainDiv.innerHTML += listItem;
  });
};

export default homeList;