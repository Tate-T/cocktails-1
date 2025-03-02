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
  const themeChanger = document.querySelector(".header__theme-change");

  if (themeChanger) {
    const isDark = isDarkMode();
    themeChanger.checked = isDark;
  }
};

const applyThemeOnLoad = () => {
  const savedTheme = localStorage.getItem("theme");
  // document.documentElement.classList.add("no-transition");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }

  // setTimeout(() => {
  //   document.documentElement.classList.remove("no-transition");
  // }, 0);

  updateThemeSwitch();
};

export const toggleTheme = () => {
  const themeChanger = document.querySelector(".header__theme-change");
  const heroSourcesArr = document.querySelectorAll("source");

  themeChanger.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    changeFromLocalStorage();

    heroSourcesArr.forEach(source => {
      if (source.media.includes("1280px")) {
        source.srcset = `${imgDesktop}`;
      } else if (source.media.includes("768px")) {
        source.srcset = `${imgTablet}`;
      } else {
        source.srcset = `${imgMobile}`;
      }
    });

    updateIcons();
  });

  updateIcons();
};

applyThemeOnLoad();
