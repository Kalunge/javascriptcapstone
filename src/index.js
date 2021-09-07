import './styles.css';
<<<<<<< HEAD
import addModal from './comments.js';
=======
import getMeals from './getmeals.js';
import homeList from './homelist.js';
import addModal from './comments.js';

>>>>>>> dev

window.addEventListener('load', async () => {
  (homeList(await getMeals()));
});

document.addEventListener('DOMContentLoaded', () => {
  addModal();
<<<<<<< HEAD
});
=======
});
>>>>>>> dev
