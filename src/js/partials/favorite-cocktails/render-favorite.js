import { getCocktails } from "../../services/get-cocktails-api";

const renderCocktails = async () => {
  const cocktails = await getCocktails();
  const list = document.querySelector(".cocktails");

  cocktails.forEach(cocktail => {
    //   {
    //     "strDrink": "Mojito Extra",
    //     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
    //     "idDrink": "15841"
    // }

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
              <svg class="cocktails__icon">
                <use
                  href="../../assets/icons/symbol-defs.svg#icon-desktop-heart"
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;

    list.insertAdjacentHTML("beforeend", html);
  });
};

renderCocktails();
