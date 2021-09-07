import './styles.css';
import getMeals from './getmeals.js';
import homeList from './homelist.js';
import addModal from './comments.js';


window.addEventListener('load', async () => {
  (homeList(await getMeals()));
});

document.addEventListener('DOMContentLoaded', () => {
  addModal();
});
