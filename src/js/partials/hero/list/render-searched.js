import { getPaginatedCocktails } from "../../../services/get-cocktails-api";

import iconsURL from "../../../../assets/icons/symbol-defs.svg";

export const renderCocktails = async (cocktails) => {
  const list = document.querySelector(".cocktails");

  list.innerHTML = "";

  cocktails.forEach(cocktail => {
    const html = `
      <li class="cocktails__item" id="${cocktail.idDrink}">
        <img
          src="${cocktail.strDrinkThumb}"
          alt="#"
          class="cocktails__img"
        />

        <div class="cocktails__padding">
          <h3 class="cocktails__subtitle">${cocktail.strDrink}</h3>
          <div class="cocktails__box">
            <button class="cocktails__learn-more">Learn more</button>
            <button class="cocktails__add-favorite cocktails__add-favorite--styles">
              <span>Add to</span>
              <svg class="cocktails__icon cocktails__icon--white">
                <use href="${iconsURL}#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="${iconsURL}#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;

    list.insertAdjacentHTML("beforeend", html);
  });
};


