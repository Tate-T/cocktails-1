import { getCocktails } from "../../services/get-cocktails-api";
import { getPaginatedCocktails } from "../../services/get-cocktails-api";

let page = 1;

const cocktailsFromDB = await getCocktails();
const list = document.querySelector(".cocktails");

const countPage = Math.ceil(cocktailsFromDB.length / 9);

const previousBtn = document.querySelector(".previous-cocktail");
const nextBtn = document.querySelector(".next-cocktail");

export const updatePaginationButtons = () => {
  const paginationButtons = document.querySelectorAll(".pagination__btn");

  paginationButtons.forEach(button => {
    button.classList.remove("pagination__btn--active");
    if (Number(button.textContent) === page) {
      button.classList.add("pagination__btn--active");
    }
  });

  const ellipsisButton = Array.from(paginationButtons).find(
    button => button.textContent === "..."
  );

  if (ellipsisButton) {
    if (page > 3 && page < countPage) {
      ellipsisButton.classList.add("pagination__btn--active");
    } else {
      ellipsisButton.classList.remove("pagination__btn--active");
    }
  }

  if (page === 1) {
    previousBtn.querySelector(".left-icon").classList.add("left-icon--empty");
  } else {
    previousBtn.querySelector(".left-icon").classList.remove("left-icon--empty");
  }

  if (page === countPage) {
    nextBtn.querySelector(".right-icon").classList.add("right-icon--empty");
  } else {
    nextBtn.querySelector(".right-icon").classList.remove("right-icon--empty");
  }
};

export const renderCocktails = async (page) => {
  const cocktails = await getPaginatedCocktails(page);

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
                <use href="../../assets/icons/symbol-defs.svg#icon-white-heart"></use>
              </svg>
              <svg class="cocktails__icon cocktails__icon--black">
                <use href="../../assets/icons/symbol-defs.svg#icon-black-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;

    list.insertAdjacentHTML("beforeend", html);
  });

  const paginationList = document.querySelector(".pagination");
  paginationList.innerHTML = "";

  for (let i = 1; i <= countPage; i++) {
    if (i <= 3 || i === countPage) {
      const htmlPaginationBtn = `
      <li class="pagination__item">
        <button class="pagination__btn ${page === i ? "pagination__btn--active" : ""}">${i}</button>
      </li>
    `;

      paginationList.insertAdjacentHTML("beforeend", htmlPaginationBtn);
    } else if (i === 4 && countPage > 4) {
      const htmlPaginationBtn = `
      <li class="pagination__item">
        <button class="pagination__btn">...</button>
      </li>
    `;

      paginationList.insertAdjacentHTML("beforeend", htmlPaginationBtn);
    }
  }

  updatePaginationButtons();
};

document.addEventListener("click", async e => {
  if (e.target.classList.contains("pagination__btn")) {
    const pageNum = Number(e.target.textContent);
    if (!isNaN(pageNum)) {
      page = pageNum;
      await renderCocktails(page);
    }
  }
});

previousBtn.addEventListener("click", async e => {
  if (page > 1) {
    page--;
    await renderCocktails(page);
  }
});

nextBtn.addEventListener("click", async e => {
  if (page < countPage) {
    page++;
    await renderCocktails(page);
  }
});

renderCocktails(page);
