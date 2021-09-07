import './styles.css';
import getMeals from './getmeals.js';
import homeList from './homelist.js';

window.addEventListener('load', async () => {
  (homeList(await getMeals()));
});
