export const getSearchedLetterCocktailsAPI = async searchedLetter => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchedLetter}`,
    ).then(res => res.json());

    const allDrinks = response.drinks || [];

    const nonAlcoholicDrinks = allDrinks.filter(
      drink => drink.strAlcoholic === "Non alcoholic",
    );

    return { drinks: nonAlcoholicDrinks };
  } catch (error) {
    console.error(error);
    return { drinks: [] };
  }
};
