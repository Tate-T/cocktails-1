import { isDarkMode } from "../../components/header/theme-changer"; 

export const updateIcons = () => {
  const isDark = isDarkMode();
  const whiteIcons = document.querySelectorAll(".cocktails__icon--white");
  const blackIcons = document.querySelectorAll(".cocktails__icon--black");

  whiteIcons.forEach(icon => icon.classList.toggle("is-hidden", isDark));
  blackIcons.forEach(icon => icon.classList.toggle("is-hidden", !isDark));
};
