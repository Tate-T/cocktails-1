import { renderFromLocalStorage } from "./render-ingredient";

const launchFavoriteIngredients = async () => {
  try {
    renderFromLocalStorage();
  } catch (error) {
    console.error(error);
  }
};

launchFavoriteIngredients();
