import axios from "axios";

export const getSearchedLetterCocktailsAPI = async (searchedLetter) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchedLetter}`);
        const data = response.data;
        
        return data;
    } catch (error) {
        console.error(error);
    }
};