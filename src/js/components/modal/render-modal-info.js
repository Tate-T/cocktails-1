import _ from "lodash";

export const renderModalInfo = (cocktail) => {
  const modalTitleMobile = document.querySelector(".modal-mobile .modal__title");
  const modalImageMobile = document.querySelector(".modal-mobile .modal__img");
  const modalInstructionsMobile = document.querySelector(".modal-mobile .modal__interesting");
  const modalIngredientsListMobile = document.querySelector(".modal-mobile .modal__list");
  const modalButtonMobile = document.querySelector(".modal-mobile .modal__btn");

  const modalTitleDesktop = document.querySelector(".modal .modal__title");
  const modalImageDesktop = document.querySelector(".modal .modal__img");
  const modalInstructionsDesktop = document.querySelector(".modal .modal__interesting");
  const modalIngredientsListDesktop = document.querySelector(".modal .modal__list");
  const modalButtonDesktop = document.querySelector(".modal .modal__btn");

  modalTitleMobile.textContent = cocktail.strDrink;
  modalTitleDesktop.textContent = cocktail.strDrink;

  modalImageMobile.src = cocktail.strDrinkThumb;
  modalImageMobile.alt = cocktail.strDrink;

  modalImageDesktop.src = cocktail.strDrinkThumb;
  modalImageDesktop.alt = cocktail.strDrink;

  modalInstructionsMobile.textContent = cocktail.strInstructions;
  modalInstructionsDesktop.textContent = cocktail.strInstructions;

  const createIngredientsList = (ingredientsListEl) => {
    ingredientsListEl.innerHTML = "";

    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];

      if (ingredient) {
        const ingredientItem = document.createElement("li");
        ingredientItem.classList.add("modal__item");
        ingredientItem.innerHTML = `
          <p class="modal__text">
            <span class="modal__span">&#10038;</span>
            ${ingredient}${measure ? ` - ${measure}` : ""}
          </p>
        `;
        ingredientsListEl.appendChild(ingredientItem);
      }
    }
  };

  createIngredientsList(modalIngredientsListMobile);
  createIngredientsList(modalIngredientsListDesktop);

  const updateFavoriteButton = (button, id) => {
    const favoriteDrinks = JSON.parse(localStorage.getItem("favorite-cocktails")) || [];
    const isFavorite = favoriteDrinks.some((drink) => drink.idDrink === id);

    if (isFavorite) {
      button.textContent = "Remove from favorite";
      button.classList.remove("modal__btn--add");
      button.classList.add("modal__btn--remove");
    } else {
      button.textContent = "Add to favorite";
      button.classList.remove("modal__btn--remove");
      button.classList.add("modal__btn--add");
    }
  };

  const handleFavoriteButtonClick = (cocktail) => {
    const favoriteDrinks = JSON.parse(localStorage.getItem("favorite-cocktails")) || [];
    const isFavorite = favoriteDrinks.some((drink) => drink.idDrink === cocktail.idDrink);

    if (isFavorite) {
      _.remove(favoriteDrinks, (drink) => drink.idDrink === cocktail.idDrink);
    } else {
      favoriteDrinks.push(cocktail);
    }

    localStorage.setItem("favorite-cocktails", JSON.stringify(favoriteDrinks));

    updateFavoriteButton(modalButtonMobile, cocktail.idDrink);
    updateFavoriteButton(modalButtonDesktop, cocktail.idDrink);
  };

  updateFavoriteButton(modalButtonMobile, cocktail.idDrink);
  updateFavoriteButton(modalButtonDesktop, cocktail.idDrink);

  modalButtonMobile.addEventListener("click", () => handleFavoriteButtonClick(cocktail));
  modalButtonDesktop.addEventListener("click", () => handleFavoriteButtonClick(cocktail));
};
