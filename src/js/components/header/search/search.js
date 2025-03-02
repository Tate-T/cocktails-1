import { renderIconsLocalStorage } from "../../../partials/cocktails/render-icons-local-storage";
import { renderCocktails } from "../../../partials/main-cocktails/render-cocktails";
import { getByName } from "../../../services/get-cocktail-name-api";

import iconsURL from "../../../../assets/icons/symbol-defs.svg"

const searchByName = () => {
  const input = document.querySelector(".header__form-input");
  const list = document.querySelector(".cocktails");
  const paginationBox = document.querySelector(".pagination-box");

  input.addEventListener("input", async () => {
    console.log(input.value);

    if (input.value !== "") {
      const cocktails = await getByName(input.value).then(res => res.drinks);

      list.innerHTML = "";
      paginationBox.style.display = "none";

      cocktails.forEach(cocktail => {
        console.log(cocktail);

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

        renderIconsLocalStorage();
      });
    } else {
      renderCocktails();
      renderIconsLocalStorage();
      paginationBox.style.display = "flex";
    }
  });
};

searchByName();
