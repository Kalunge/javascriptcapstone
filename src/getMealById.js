const getMeal = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const result = await res.json();
  return result.meals[0];
};

export default getMeal;
