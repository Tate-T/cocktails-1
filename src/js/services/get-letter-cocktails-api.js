export const getSearchedLetterCocktailsAPI = async searchedLetter => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    ).then((res) => res.json());

    const allDrinks = response.drinks || [];

    const filteredDrinks = allDrinks.filter(drink => {
      const startsWithLetter = drink.strDrink
        .toLowerCase()
        .startsWith(searchedLetter.toLowerCase());
      const hasTwoOrMoreWords = drink.strDrink.split(" ").length >= 2;

      return startsWithLetter && hasTwoOrMoreWords;
    });

    return { drinks: filteredDrinks };
  } catch (error) {
    console.error(error);
    return { drinks: [] };
  }
};


