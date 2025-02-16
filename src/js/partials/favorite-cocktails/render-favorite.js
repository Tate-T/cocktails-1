import { getCocktails } from "../../services/get-cocktails-api";
import { getPaginatedCocktails } from "../../services/get-cocktails-api";

const renderCocktails = async () => {
  let page = 1;

  const cocktailsFromDB = await getCocktails();
  const cocktails = await getPaginatedCocktails(page);
  const list = document.querySelector(".cocktails");

  const countPage = Math.ceil(cocktailsFromDB.length / 9);

  const previousBtn = document.querySelector(".previous-cocktail");
  const nextBtn = document.querySelector(".next-cocktail");

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

  const paginationList = document.querySelector(".pagination");

  for (let i = 1; i <= countPage; i++) {
    if (i <= 3 || i === countPage) {
      const htmlPaginationBtn = `
      <li class="pagination__item">
        <button class="pagination__btn">${i}</button>
      </li>
    `;

      paginationList.insertAdjacentHTML("beforeend", htmlPaginationBtn);
    } else if (i === 4) {
      const htmlPaginationBtn = `
      <li class="pagination__item">
        <button class="pagination__btn">...</button>
      </li>
    `;

      paginationList.insertAdjacentHTML("beforeend", htmlPaginationBtn);
    }
  }

  document.addEventListener("click", async e => {
    if (e.target.classList.contains("pagination__btn")) {
      const pageNum = Number(e.target.textContent);
      page = !isNaN(Number(e.target.textContent))
        ? Number(e.target.textContent)
        : page;

      if (!isNaN(pageNum)) {
        const currCocktail = await getPaginatedCocktails(pageNum);

        list.innerHTML = "";

        currCocktail.forEach(cocktail => {
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
      }
    }
  });

  previousBtn.addEventListener("click", async e => {
    const previousPage = page - 1;

    if (previousPage > 0) {
      page--;

      const currCocktail = await getPaginatedCocktails(previousPage);

      list.innerHTML = "";

      currCocktail.forEach(cocktail => {
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
    }
  });

  nextBtn.addEventListener("click", async e => {
    const nextPage = page + 1;

    if (nextPage <= countPage) {
      page++;

      const currCocktail = await getPaginatedCocktails(nextPage);

      list.innerHTML = "";

      currCocktail.forEach(cocktail => {
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
    }
  });
};

renderCocktails();
