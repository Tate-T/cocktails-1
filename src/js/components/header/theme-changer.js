import { updateIcons } from "../../partials/cocktails/update-icons"; 

export const toggleTheme = () => {
  const themeChanger = document.querySelector(".header__theme-change");
  const heroSourcesArr = document.querySelectorAll("source");

  themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    heroSourcesArr.forEach(source => {
      if (source.media.includes("1280px")) {
        source.srcset = "../../assets/images/desktop/dark-mode-fresh.webp";
      } else if (source.media.includes("768px")) {
        source.srcset = "../../assets/images/tablet/dark-mode-fresh.webp";
      } else {
        source.srcset = "../../assets/images/mobile/dark-mode-fresh.webp";
      }
    });

    updateIcons();
  });

  updateIcons();
};

export const isDarkMode = () => document.body.classList.contains("dark-mode");
