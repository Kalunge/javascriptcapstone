import './styles.css';
import getMeals from './getmeals.js';
import homeList from './homelist.js';
import addModal from './comments.js';

window.addEventListener('load', async () => {
  homeList(await getMeals());
});

document.addEventListener('DOMContentLoaded', () => {
  // homeList(await getMeals());
});

const buttonn = document.querySelector('.main-div');
const closeButton = document.querySelector('.btn-close');
closeButton.addEventListener('click', () => {
  window.location.href = '/';
});
buttonn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.textContent === 'comments') {
    await addModal(e.target.id);
  }
});
