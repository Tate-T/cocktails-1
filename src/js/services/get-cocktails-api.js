function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const getCocktails = async () => {
  return await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
  )
    .then(res => res.json())
    .then(res => res.drinks);
};

export const getPaginatedCocktails = async (page = 1) => {
  const drinksPerPage = 9;
  const startIndex = (page - 1) * drinksPerPage;

  return await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
  )
    .then(res => res.json())
    .then(res => {
      const drinks = res.drinks.slice(startIndex, startIndex + drinksPerPage);

      return drinks;
    });
};
