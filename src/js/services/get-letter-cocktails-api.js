import axios from "axios";
import { noConflict } from "lodash";

export const getSearchedLetterCocktailsAPI = async (searchedLetter) => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchedLetter}`
    );
    const allDrinks = response.data.drinks || [];

    const nonAlcoholicDrinks = allDrinks.filter(
      (drink) => drink.strAlcoholic === "Non alcoholic"
    );

    return { drinks: nonAlcoholicDrinks };
  } catch (error) {
    console.error(error);
    return { drinks: [] };
  }
};