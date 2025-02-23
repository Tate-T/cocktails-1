import { getSearchedLetterCocktailsAPI } from "../../../services/get-letter-cocktails-api";
import { renderCocktails } from "../list/render-searched";

export const clickDropdownButton = () => {
    document.addEventListener("click", async (e) => {
        if (e.target.classList.contains("hero__dropdown--button")) {
            const titleEl = document.querySelector(".cocktails__title");
            const cocktailsEl = document.querySelector(".cocktails");
            const frameEl = document.querySelector(".icon-frame");
            const paginationBoxEl = document.querySelector(".pagination-box");

            const data = await getSearchedLetterCocktailsAPI(e.target.textContent);

            const selectedButtonEl = document.querySelector(".hero__dropdown--selected");
            const dropdownEl = document.querySelector(".hero__dropdown");
            const dropdownContentEl = document.querySelector(".hero__dropdown--content");
            const dropdownBoxEl = document.querySelector(".hero__box");

            selectedButtonEl.textContent = e.target.textContent;
            dropdownContentEl.classList.add("is-hidden"); 
            dropdownBoxEl.style.height = "auto";

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
                
                console.log(data);

                renderCocktails(data.drinks);
            }
        }
    });
}  
