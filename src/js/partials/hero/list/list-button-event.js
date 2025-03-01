import { getSearchedLetterCocktailsAPI } from "../../../services/get-letter-cocktails-api";
import { renderCocktails } from "../list/render-searched";

export const clickListButton = () => {
    document.addEventListener("click", async (e) => {
        if (e.target.classList.contains("hero__button")) {
            const titleEl = document.querySelector(".cocktails__title");
            const cocktailsEl = document.querySelector(".cocktails");
            const frameEl = document.querySelector(".icon-frame");
            const paginationBoxEl = document.querySelector(".pagination-box");

            const data = await getSearchedLetterCocktailsAPI(e.target.textContent);

            if (data.drinks.length === 0) {
                cocktailsEl.classList.add("is-hidden");

                titleEl.textContent = "Sorry, we didn't find any cocktail for you";

                frameEl.classList.remove("is-hidden");

                paginationBoxEl.classList.add("is-hidden");
            } else {
                cocktailsEl.classList.remove("is-hidden");

                frameEl.classList.add("is-hidden");

                titleEl.textContent = "Searching results";
                
                paginationBoxEl.classList.add("is-hidden");

                renderCocktails(data.drinks);
            }
        }
    });
};