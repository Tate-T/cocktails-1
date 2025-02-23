import axios from "axios";
import _ from "lodash";

export const favoriteDrinks = [];

export const renderFromLocalStorage = () => {
  const favoriteDrinksLocalStorage = JSON.parse(
    localStorage.getItem("favorite-cocktails"),
  );
  
  if (favoriteDrinksLocalStorage !== null) {
    if (favoriteDrinksLocalStorage.length !== 0) {
      favoriteDrinksLocalStorage.forEach(cocktail => {
        favoriteDrinks.push(cocktail);
      });
  
      const list = document.querySelector(".cocktails");
  
      favoriteDrinksLocalStorage.forEach(cocktail => {
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
              <button class="cocktails__remove-favorite cocktails__add-favorite--styles">
                <span>Remove</span>
                <svg class="cocktails__icon cocktails__icon--white">
                  <use href="../../assets/icons/symbol-defs.svg#icon-full-heart"></use>
                </svg>
                <svg class="cocktails__icon cocktails__icon--black">
                  <use href="../../assets/icons/symbol-defs.svg#icon-full-heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>
      `;
  
        list.insertAdjacentHTML("beforeend", html);
      });
      
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
      
    }
  }  
}