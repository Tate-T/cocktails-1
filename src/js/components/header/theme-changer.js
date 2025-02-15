export const toggleTheme = () => {
  const themeChanger = document.querySelector(".header__theme-changer");

  themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
};
