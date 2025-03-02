const errSection = document.querySelector(".err");
const favoriteSection = document.querySelector(".favorite");

function checkIfFavoritesEmpty() {
  const favoriteIngredientsLocalStorage = JSON.parse(
    localStorage.getItem("favorite-ingredients")
  );

  if (!favoriteIngredientsLocalStorage || favoriteIngredientsLocalStorage.length === 0) {
    errSection.style.display = "block";
    favoriteSection.style.display = "none";
  } else {
    errSection.style.display = "none";
    favoriteSection.style.display = "block";
  }
}

checkIfFavoritesEmpty();
