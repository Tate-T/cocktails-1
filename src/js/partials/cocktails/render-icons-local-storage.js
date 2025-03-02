import iconsURL from "../../../assets/icons/symbol-defs.svg";

export const renderIconsLocalStorage = () => {
  const favoriteDrinksLocalStorage = JSON.parse(
    localStorage.getItem("favorite-cocktails"),
  );

  if (favoriteDrinksLocalStorage !== null) {
    if (favoriteDrinksLocalStorage.length !== 0) {
      setTimeout(() => {
        const items = document.querySelectorAll(".cocktails__item");

        favoriteDrinksLocalStorage.forEach(cocktail => {
          items.forEach(item => {
            if (cocktail.idDrink === item.id) {
              const btn = item.children[1].children[1].children[1];

              btn.children[0].textContent = "Remove";
              btn.classList.add("cocktails__remove-favorite");

              const whiteIcon = btn.querySelector(".cocktails__icon--white");

              whiteIcon.children[0].setAttribute(
                "href",
                `${iconsURL}#icon-full-heart`,
              );

              const blackIcon = btn.querySelector(".cocktails__icon--black");

              blackIcon.children[0].setAttribute(
                "href",
                `${iconsURL}#icon-full-heart`,
              );

              setTimeout(() => {
                btn.classList.remove("cocktails__add-favorite");
              }, 500);
            }
          });
        });
      }, 500);
    }
  }
};

renderIconsLocalStorage();
