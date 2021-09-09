import './styles.css';
import getMeals from './getmeals.js';
import homeList from './homelist.js';
import addModal from './comments.js';
import logo from './assets/ramen.png';

const logoDiv = document.querySelector('.logo');
const logoImage = document.createElement('img');
logoImage.src = logo;
logoImage.classList.add('logo-img');

logoDiv.appendChild(logoImage);

window.addEventListener('load', async () => {
  homeList(await getMeals());
});

document.addEventListener('DOMContentLoaded', () => {
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
});
