import { getSearchedLetterCocktailsAPI } from "./get-cocktails-api";

export const clickListButton = () => {
    document.addEventListener("click", async (e) => {
        if (e.target.classList.contains("hero__button")) {
            const data = await getSearchedLetterCocktailsAPI(e.target.textContent);


            console.log(data); // Виведіть дані у консоль або відобразіть їх на сторінці
        }
    });
};