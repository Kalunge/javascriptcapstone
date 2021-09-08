const homeList = (data) => {
  const mainDiv = document.querySelector('.main-div');

  data.forEach((element) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('item-image');
    const img = document.createElement('img');
    img.src = element.strMealThumb;
    const itemTextDiv = document.createElement('div');
    itemTextDiv.classList.add('item-text');
    const text = document.createElement('p');
    text.innerHTML = element.strMeal;
    const textLikes = document.createElement('p');
    const button = document.createElement('button');
    button.setAttribute('class', 'comment-btn');
    button.setAttribute('id', `${element.idMeal}`);
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    button.innerHTML = 'comments';
    listItem.appendChild(firstDiv);
    firstDiv.appendChild(img);
    itemTextDiv.appendChild(text);
    itemTextDiv.appendChild(textLikes);
    itemTextDiv.appendChild(button);
    listItem.appendChild(itemTextDiv);

    mainDiv.appendChild(listItem);
  });
};

export default homeList;
