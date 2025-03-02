const errSection = document.querySelector(".err");
const favoriteSection = document.querySelector(".favorite");

const favoriteDrinksLocalStorage = JSON.parse(
  localStorage.getItem("favorite-cocktails"),
);

if (
  favoriteDrinksLocalStorage === null ||
  favoriteDrinksLocalStorage.length === 0
) {
  errSection.style.display = "block";
  favoriteSection.style.display = "none";
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("cocktails__add-favorite--styles")) {
    setTimeout(() => {
      const favoriteDrinksLocalStorage = JSON.parse(
        localStorage.getItem("favorite-cocktails"),
      );

      if (
        favoriteDrinksLocalStorage === null ||
        favoriteDrinksLocalStorage.length === 0
      ) {
        errSection.style.display = "block";
        favoriteSection.style.display = "none";
      }
    }, 750);
  }
});
