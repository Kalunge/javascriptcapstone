const modalBody = document.querySelector('.modal-body');
const mealName = 'My Meal';
const title = 'Comments(3)';
const oldComments = ['my commentr', 'your comment', "I love the african cuisine"];
import { comment } from 'postcss';
import meal from './meal.jpg';

const addModal = () => {
  const img = document.createElement('img');
  img.src = meal;
  const p = document.createElement('h2');
  p.classList.add('name')
  p.innerHTML = mealName;

  modalBody.appendChild(img);
  const div= document.createElement('div')
  div.classList.add('items')
  div.appendChild(p);
  const headingFour = document.createElement('h4')
  headingFour.innerHTML = `comments (${oldComments.length})`
  div.appendChild(headingFour)
  oldComments.forEach((comment) => {
    const p = document.createElement('p');
    p.innerHTML = comment;
    return div.appendChild(p);
  });
  modalBody.appendChild(div);
};

export default addModal;
