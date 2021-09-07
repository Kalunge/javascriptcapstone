const getMeals = () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
  .then((response) => response.json())
  .then((data) => data.meals);

export default getMeals;