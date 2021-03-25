const themeToggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("Dark-theme");
    } else {
        document.documentElement.setAttribute('data-theme','light');
        console.log("Light-theme");
    }
}

themeToggleSwitch.addEventListener('change',switchTheme, false);