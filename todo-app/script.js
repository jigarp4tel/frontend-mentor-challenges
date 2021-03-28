const themeToggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefer-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

themeToggleSwitch.addEventListener('change', switchTheme, false);
console.log(storedTheme);