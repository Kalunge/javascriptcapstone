import commentsCounter from '../commentsCounter.js';
import homeCounter from '../homecount.js'

describe('returns the length of comments', () => {
  it('returns length of initial comments', () => {
    const comments = [];
    expect(commentsCounter(comments)).toBe(0);
  });

  it('returns length on addition of new comments', () => {
    const newComments = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    expect(commentsCounter(newComments)).toBe(2);
  });
});


describe('Returns number of items on the homepage', () => {
  it('returns 0 if the meals array is empty', () => {
    const mealsArray = [];
    expect(homeCounter(mealsArray)).toBe(0);
  });

  it('returns the number of meals in the mealsArray ', () => {
    const mealsArray = [
      {
      strMeal:	"Canadian Butter Tarts",
      strMealThumb:	"https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
      idMeal:	"52923"
      }
    ];
    expect(homeCounter(mealsArray)).toBe(1);
  });
});
