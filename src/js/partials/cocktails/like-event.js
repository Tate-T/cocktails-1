import { isDarkMode } from "../../components/header/theme-changer";
import iconsURL from "../../../assets/icons/symbol-defs.svg";

export const likeCocktail = () => {
  document.addEventListener("click", e => {
    const target = e.target;
    const whiteIcon = target.querySelector(".cocktails__icon--white");
    const blackIcon = target.querySelector(".cocktails__icon--black");
  
    if (e.target.classList.contains("cocktails__remove-favorite")) {
      if (isDarkMode()) {
        if (blackIcon) {
          const useElement = blackIcon.querySelector("use");
          if (useElement) {
            whiteIcon.classList.add("is-hidden");
            useElement.setAttribute("href", `${iconsURL}#icon-black-heart`);
            blackIcon.classList.remove("is-hidden");
          }
        }
        if (whiteIcon) {
          const useElement = whiteIcon.querySelector("use");
          if (useElement) {
            useElement.setAttribute("href", ""); 
          }
        }
      } else {
        if (whiteIcon) {
          const useElement = whiteIcon.querySelector("use");
          if (useElement) {
            blackIcon.classList.add("is-hidden"); 
            useElement.setAttribute("href", `${iconsURL}#icon-white-heart`);
            whiteIcon.classList.remove("is-hidden"); 
          }
        }
        if (blackIcon) {
          const useElement = blackIcon.querySelector("use");
          if (useElement) {
            useElement.setAttribute("href", "");
          }
        }
      }
  
      target.children[0].textContent = "Add to";
      target.classList.toggle("cocktails__remove-favorite");
  
      setTimeout(() => {
        target.classList.toggle("cocktails__add-favorite");
      }, 500);
    }
  
    if (e.target.classList.contains("cocktails__add-favorite")) {
      if (isDarkMode()) {
        if (blackIcon) {
          const useElement = blackIcon.querySelector("use");
          if (useElement) {
            whiteIcon.classList.add("is-hidden"); 
            useElement.setAttribute("href", `${iconsURL}#icon-full-heart`);
            blackIcon.classList.remove("is-hidden");
          }
        }
        if (whiteIcon) {
          const useElement = whiteIcon.querySelector("use");
          if (useElement) {
            useElement.setAttribute("href", ""); 
          }
        }
      } else {
        if (whiteIcon) {
          const useElement = whiteIcon.querySelector("use");
          if (useElement) {
            blackIcon?.classList.add("is-hidden"); 
              useElement.setAttribute("href", `${iconsURL}#icon-full-heart`);
              whiteIcon.classList.remove("is-hidden"); 
          }
        }
        if (blackIcon) {
          const useElement = blackIcon.querySelector("use");
          if (useElement) {
            useElement.setAttribute("href", "");
          }
        }
      }
  
      target.children[0].textContent = "Remove";
      target.classList.toggle("cocktails__remove-favorite");
  
      setTimeout(() => {
        target.classList.toggle("cocktails__add-favorite");
      }, 500);
    }
  });
  
}