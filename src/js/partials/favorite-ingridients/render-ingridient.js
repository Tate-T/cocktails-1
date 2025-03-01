// document.addEventListener("DOMContentLoaded"), () => {
//     const button = document.querySelector(".test");
//     const list = document.querySelector(".ingridients__list");

//     button.addEventListener("click", async () => {
//         try {
//             const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
//             const ingredients = response.data.drinks;
            
//             list.innerHTML = ""; // Очищуємо список перед рендерингом
            
//             ingredients.forEach(ingredient => {
//                 const listItem = document.createElement("li");
//                 listItem.classList.add("ingridients__cards");
                
//                 listItem.innerHTML = `
//                     <h3 class="ingridients__cards-title">${ingredient.strIngredient1}</h3>
//                     <p class="ingridients__cards-subtitle">Ingredient description</p>
//                     <div class="ingridients__button-box">
//                         <button class="ingridients__button-more">Learn More</button>
//                         <button class="ingridients__button-remove">
//                             Remove
//                             <svg class="ingridients__icon">
//                                 <use href="../../assets/icons/symbol-defs.svg#icon-full-heart"></use>
//                             </svg>
//                         </button>
//                     </div>
//                 `;
                
//                 list.appendChild(listItem);
//             });
//         } catch (error) {
//             console.error("Помилка при отриманні даних: ", error);
//         }
//     });
// };
