import { renderFromLocalStorage } from "./render-from-local-storage";
import { paginateCocktails } from "../cocktails/pagination";
import { updateIcons } from "../cocktails/update-icons";
import { likeCocktail } from "../cocktails/like-event";
import { manageFavoriteCocktail } from "../cocktails/add-to-favorite";

const launchFavoriteCocktails = async () => {
    try {
        await paginateCocktails(renderFromLocalStorage);

        likeCocktail();
        manageFavoriteCocktail();

        updateIcons();
    } catch(error) {
        console.error(error);
    }
}

launchFavoriteCocktails();