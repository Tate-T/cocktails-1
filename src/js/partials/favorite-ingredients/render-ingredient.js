import _ from "lodash";

export const favoriteIngredients = [];

export const renderFromLocalStorage = () => {
  const favoriteIngredientsLocalStorage = JSON.parse(
    localStorage.getItem("favorite-ingredients")
  );

  if (favoriteIngredientsLocalStorage && favoriteIngredientsLocalStorage.length > 0) {
    favoriteIngredientsLocalStorage.forEach((ingredient) => {
      favoriteIngredients.push(ingredient);
    });

    const list = document.querySelector(".ingredients__list");

    favoriteIngredientsLocalStorage.forEach((ingredient) => {
      const html = `
        <li class="ingredients__cards" id="${ingredient.idIngredient}">
          <h3 class="ingredients__cards-title">${ingredient.strIngredient}</h3>
          <p class="ingredients__cards-subtitle">${ingredient.strType || "Unknown"}</p>
          <div class="ingredients__button-box">
            <button class="ingredients__button-more">Learn More</button>
            <button class="ingredients__button-remove">
              Remove
              <svg class="ingredients__icon">
                <use href="./assets/icons/symbol-defs.svg#icon-full-heart"></use>
              </svg>
            </button>
          </div>
        </li>
      `;

      list.insertAdjacentHTML("beforeend", html);
    });
  }
};
