import { updateIcons } from "../../partials/cocktails/update-icons"; 

import imgMobile from "../../../assets/images/mobile/dark-mode-fresh.webp";
import imgTablet from "../../../assets/images/tablet/dark-mode-fresh.webp";
import imgDesktop from "../../../assets/images/desktop/dark-mode-fresh.webp";

export const isDarkMode = () => document.documentElement.classList.contains("dark-mode");

const changeFromLocalStorage = () => {
  if (isDarkMode()) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

const updateThemeSwitch = () => {
  const themeChangerArr = document.querySelectorAll(".header__theme-change");

  themeChangerArr.forEach(themeChanger => {
    if (themeChanger) {
    const isDark = isDarkMode();
    themeChanger.checked = isDark;
  }
  });
  
};

const applyThemeOnLoad = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }

  updateThemeSwitch();
};

export const toggleTheme = () => {
  const themeChangerArr = document.querySelectorAll(".header__theme-change");
  const heroSourcesArr = document.querySelectorAll("source");

  themeChangerArr.forEach(themeChanger => {
    themeChanger.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark-mode");
      changeFromLocalStorage();
  
      heroSourcesArr.forEach(source => {
        if (source.media.includes("1280px")) {
          source.srcset = imgDesktop;
        } else if (source.media.includes("768px")) {
          source.srcset = imgTablet;
        } else {
          source.srcset = imgMobile;
        }
      });
  
      updateIcons();
    });
  }) 
};

applyThemeOnLoad();
