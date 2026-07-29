const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
