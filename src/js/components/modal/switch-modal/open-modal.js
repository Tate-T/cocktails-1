import { getCocktailDetails } from "../../../services/get-cocktail-details-api";
import { renderModalInfo } from "../render-modal-info";

export const openModal = () => {
  const backdrop = document.querySelector(".backdrop");

  document.addEventListener("click", async e => {
    if (e.target.classList.contains("cocktails__learn-more")) {
      try {
        const cocktailId = e.target.closest(".cocktails__item").id;

        const cocktailDetails = await getCocktailDetails(cocktailId);

        renderModalInfo(cocktailDetails);

        backdrop.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
      } catch (error) {
        console.error(error);
      }
    }
  });
};
