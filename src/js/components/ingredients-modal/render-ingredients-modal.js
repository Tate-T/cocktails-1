// import { fetchCocktailInfo, fetchIngredientInfo } from '../../../js/services/get-ingredients-info-api';

// export const renderIngredients = (cocktail) => {
//   const modalList = document.querySelector(".ingredients-modal__list");

//   modalList.innerHTML = '';

//   for (let i = 1; i <= 15; i++) {
//     const ingredient = cocktail[`strIngredient${i}`];
//     const ingredientId = cocktail[`idIngredient${i}`]; 

//     if (ingredient) {
//       const listItem = document.createElement("li");
//       listItem.classList.add("modal__item", "ingredients-modal__item");
//       listItem.innerHTML = `<p class="modal__text ingredients-modal__text" data-id="${ingredientId}">
//         <span class="modal__span ingredients-modal__span">&#10038;</span> ${ingredient}
//       </p>`;
//       modalList.appendChild(listItem);
//     }
//   }
// };

// export const openIngModal = () => {
//   const backdrop = document.querySelector(".ingredients-backdrop");
//   const modalTitle = document.querySelector(".ingredients-modal__title");
//   const modalSubtitle = document.querySelector(".ingredients-modal__subtitle");
//   const modalInfoBox = document.querySelector(".ingredients-modal__info-box");

//   document.addEventListener("click", async (e) => {
//     if (e.target.classList.contains("modal__text")) {
//       const ingredientId = e.target.dataset.id; 
//       const ingredientInfo = await fetchIngredientInfo(ingredientId);

//       modalTitle.textContent = ingredientInfo.strIngredient;
//       modalSubtitle.textContent = ingredientInfo.strType;
//       modalInfoBox.innerHTML = `<p class="modal__interesting ingredients-modal__interesting">${ingredientInfo.strDescription}</p>`;

//       backdrop.classList.remove("is-hidden");
//       document.body.classList.add("no-scroll");
//     }
//   });
// };

// export const closeIngModal = () => {
//   const closeBtnArr = document.querySelectorAll(".modal__close");
//   const backdrop = document.querySelector(".ingredients-backdrop");

//   closeBtnArr.forEach(closeBtn => {
//     closeBtn.addEventListener("click", () => {
//       backdrop.classList.add("is-hidden");
//       document.body.classList.remove("no-scroll");
//     });
//   });
// };

// export const initializeModal = async (cocktailId) => {
//   const cocktail = await fetchCocktailInfo(cocktailId);
//   renderIngredients(cocktail);
//   openIngModal();
//   closeIngModal();
// };
