const openIngModal = () => {
    const backdrop = document.querySelector(".ingredients-backdrop");
    const modalTitle = document.querySelector(".ingredients-modal__title");
    const modalSubtitle = document.querySelector(".ingredients-modal__subtitle");
    const modalDescription = document.querySelector(".modal__interesting");

    document.addEventListener("click", async (e) => {
        const ingredientItem = e.target.closest(".ingredient-item");
        if (!ingredientItem) return;

        const ingredientName = ingredientItem.dataset.name;
        if (!ingredientName) return;

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`);
            const data = await response.json();

            if (!data.ingredients || data.ingredients.length === 0) {
                console.error("Інгредієнт не знайдено");
                return;
            }

            const ingredient = data.ingredients[0];

            modalTitle.textContent = ingredient.strIngredient || "Невідомий інгредієнт";
            modalSubtitle.textContent = ingredient.strType || "Немає категорії";
            modalDescription.textContent = ingredient.strDescription || "Опис відсутній.";

            backdrop.classList.remove("is-hidden");
            document.body.classList.add("no-scroll");

        } catch (error) {
            console.error("Помилка отримання даних інгредієнта:", error);
        }
    });
};

openIngModal();
