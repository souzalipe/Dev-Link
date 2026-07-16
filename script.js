const html = document.documentElement;
const THEME_KEY = "theme";

function applyTheme(theme) {
    html.classList.toggle("light", theme === "light");
}

function toggleTheme() {
    const isLight = html.classList.toggle("light");
    localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
}

const savedTheme = localStorage.getItem(THEME_KEY);
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

applyTheme(savedTheme || (prefersLight ? "light" : "dark"));
