import axios from "axios";

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const getCocktails = async () => {
  return await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then(res => shuffleArray(res.data.drinks));
};