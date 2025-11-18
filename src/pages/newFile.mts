import { themeToggle, body } from "./index.astro.0.mts";

themeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');
localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
