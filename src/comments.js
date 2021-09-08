/* eslint-disable consistent-return */
import getMeal from './getMealById.js';
import addComment from './addComment.js';
import addAlert from './alert.js';

const modalBody = document.querySelector('.modal-body');

const oldComments = [
  'my commentr',
  'your comment',
  'I love the african cuisine',
];

const addModal = async (id) => {
  const meal = await getMeal(id);
  const itemId = meal.idMeal;
  const image = meal.strMealThumb;
  const mealName = meal.strMeal;
  const img = document.createElement('img');
  img.src = image;
  const p = document.createElement('h2');
  p.classList.add('name');
  p.innerHTML = mealName;
  const category = document.createElement('p');
  category.innerHTML = `This meal belongs to <strong>${meal.strCategory}</strong> Category`;
  const recipe = document.createElement('p');
  const Instructions = meal.strInstructions.substring(0, 130);
  recipe.innerHTML = `<strong>Instructions for making</strong> ${Instructions}  =>FIND MORE AT  <a target="_blank" href=${meal.strYoutube}>Youtube</a>`;

  modalBody.appendChild(img);
  const div = document.createElement('div');
  div.classList.add('items');
  div.appendChild(p);
  div.appendChild(category);
  div.appendChild(recipe);
  const headingFour = document.createElement('h4');
  headingFour.innerHTML = `comments (${oldComments.length})`;
  div.appendChild(headingFour);
  oldComments.forEach((comment) => {
    const p = document.createElement('p');
    p.innerHTML = comment;
    return div.appendChild(p);
  });
  modalBody.appendChild(div);
  const form = document.createElement('form');
  form.setAttribute('id', `${itemId}`);
  form.setAttribute('class', 'form');
  form.innerHTML = `<div class="mb-3">
               <h3>Add a comment</h3>
               <input type="text" class="form-control  mt-3 py-2" id="name" placeholder="Your Name">
             </div>
             <div class="mb-3">
               <textarea type="text" placeholder="Your Insights" class="form-control py-2" id="comment"></textarea>
             </div>
             <button type="submit" id="button" class="btn btn-dark right button">Comment</button>`;
  modalBody.appendChild(form);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector('#name');
    const comment = document.querySelector('#comment');
    const formData = {
      item_id: e.target.id,
      username: username.value,
      comment: comment.value,
    };
    if (username.value === '') return addAlert('name', 'danger');
    if (comment.value === '') return addAlert('comment', 'danger');
    if (await addComment(formData)) {
      addAlert('Comment added succesfully', 'success');
      comment.value = '';
      username.value = '';
    }
  });
};

export default addModal;
