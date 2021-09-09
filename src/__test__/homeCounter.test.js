import homeCounter from '../homecount.js';

describe('Returns number of items on the homepage', () => {
  it('returns 0 if the meals array is empty', () => {
    const mealsArray = [];
    expect(homeCounter(mealsArray)).toBe(0);
  });

  it('returns the number of meals in the mealsArray ', () => {
    const mealsArray = [
      {
        strMeal: 'Canadian Butter Tarts',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
        idMeal: '52923',
      },
    ];
    expect(homeCounter(mealsArray)).toBe(1);
  });
});