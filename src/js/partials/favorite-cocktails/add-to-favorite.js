import axios from "axios";
import _ from "lodash";

const favoriteDrinks = [];

document.addEventListener("click", async e => {
  setTimeout(async () => {
    // Add
    if (e.target.classList.contains("cocktails__remove-favorite")) {
      const id = e.target.closest("li").id;

      await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => favoriteDrinks.push(res.data.drinks[0]));

      localStorage.setItem(
        "favorite-cocktails",
        JSON.stringify(favoriteDrinks),
      );
    }

    // Remove
    else if (e.target.classList.contains("cocktails__add-favorite")) {
      const id = e.target.closest("li").id;

      const currCocktail = await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.data.drinks[0]);

      _.remove(favoriteDrinks, currCocktail);

      localStorage.setItem(
        "favorite-cocktails",
        JSON.stringify(favoriteDrinks),
      );
    }
  }, 500);
});
