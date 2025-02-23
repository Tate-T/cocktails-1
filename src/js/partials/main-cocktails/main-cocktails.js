import { renderCocktails } from "./render-cocktails";
import { paginateCocktails } from "../cocktails/pagination";
import { updateIcons } from "../cocktails/update-icons";
import { likeCocktail } from "../cocktails/like-event";
import { manageFavoriteCocktail } from "../cocktails/add-to-favorite";

const launchMainCocktails = async () => {
    try {
        await paginateCocktails(renderCocktails);

        likeCocktail();
        manageFavoriteCocktail();

        updateIcons();
    } catch(error) {
        console.error(error);
    }
}

launchMainCocktails();