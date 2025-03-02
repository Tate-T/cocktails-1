document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ingredients__button-remove")) {
      const item = e.target.closest("li");
      item.style.display = "none"; 
  
      let favoriteIngredientsLocalStorage = JSON.parse(
        localStorage.getItem("favorite-ingredients")
      ) || [];
  
      favoriteIngredientsLocalStorage = favoriteIngredientsLocalStorage.filter(
        (el) => el.idIngredient !== item.id
      );
  
      setTimeout(() => {
        localStorage.setItem(
          "favorite-ingredients",
          JSON.stringify(favoriteIngredientsLocalStorage)
        );
  
        checkIfFavoritesEmpty();
      }, 750);
    }
  });
  