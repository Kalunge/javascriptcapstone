import meal from './meal.jpg';

const modalBody = document.querySelector('.modal-body');
const mealName = 'My Meal';
// const title = 'Comments(3)';
const oldComments = [
  'my commentr',
  'your comment',
  'I love the african cuisine',
];

const addModal = () => {
  const img = document.createElement('img');
  img.src = meal;
  const p = document.createElement('h2');
  p.classList.add('name');
  p.innerHTML = mealName;

  modalBody.appendChild(img);
  const div = document.createElement('div');
  div.classList.add('items');
  div.appendChild(p);
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
  form.innerHTML = `<div class="mb-3">
               <h3>Add a comment</h3>
               <input type="text" class="form-control  mt-3 py-2" id="name" placeholder="Your Name">
             </div>
             <div class="mb-3">
               <textarea type="text" placeholder="Your Insights" class="form-control py-2" id="comment"></textarea>
             </div>
             <button type="submit" id="button" class="btn btn-light right button">Comment</button>`;
  modalBody.appendChild(form);
};

export default addModal;
