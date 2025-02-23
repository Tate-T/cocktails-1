import { getCocktails } from "../../services/get-cocktails-api";

export const paginateCocktails = async (renderPage) => {
  let page = 1;

  const cocktailsFromDB = await getCocktails();
  const countPage = Math.ceil(cocktailsFromDB.length / 9);

  const previousBtn = document.querySelector(".previous-cocktail");
  const nextBtn = document.querySelector(".next-cocktail");

  const updatePaginationButtons = () => {
    const paginationButtons = document.querySelectorAll(".pagination__btn");

    paginationButtons.forEach(button => {
      button.classList.remove("pagination__btn--active");
      if (Number(button.textContent) === page) {
        button.classList.add("pagination__btn--active");
      }
    });

    const ellipsisButton = Array.from(paginationButtons).find(
      button => button.textContent === "...",
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
      previousBtn
        .querySelector(".left-icon")
        .classList.remove("left-icon--empty");
    }

    if (page === countPage) {
      nextBtn.querySelector(".right-icon").classList.add("right-icon--empty");
    } else {
      nextBtn
        .querySelector(".right-icon")
        .classList.remove("right-icon--empty");
    }
  };

  const changePage = async (newPage) => {
    if (newPage >= 1 && newPage <= countPage) {
      page = newPage;
      await renderPage(page);
      updatePaginationButtons();
    }
  };

  const renderPaginationButtons = () => {
    const paginationList = document.querySelector(".pagination");

    if (paginationList) {
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
    }
  };

  document.addEventListener("click", async e => {
    if (e.target.classList.contains("pagination__btn")) {
      const pageNum = Number(e.target.textContent);
      if (!isNaN(pageNum)) {
        await changePage(pageNum);
      }
    }
  });

  previousBtn.addEventListener("click", async e => {
    await changePage(page - 1);
  });

  nextBtn.addEventListener("click", async e => {
    await changePage(page + 1);
  });

  renderPaginationButtons();
  await changePage(1);
};
