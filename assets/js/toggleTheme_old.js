window.loadFunctions.theme = function() {
    // inject css link as last element of head tag
    let themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.id = 'theme-link';
    document.head.appendChild(themeLink);
    
    // inject theme toggle button as first element of body tag
    let themeToggle = document.createElement('button');
    themeToggle.style = 'float: right;';
    themeToggle.onclick = toggleTheme;
    themeToggle.innerHTML = '<img src="./assets/icons/day-and-night.png" height="17px" style="float: left; text-align: left;">';
    document.body.insertBefore(themeToggle, document.body.firstChild);

    // set theme
    setTheme();
}

function setTheme() {
    let theme = localStorage.getItem('theme');

    if (theme === null) {
        localStorage.setItem('theme', 'dark');
    }
    document.getElementById('theme-link').href = theme === 'dark' ? './assets/css/dark.css' : './assets/css/light.css';
}

function toggleTheme() {
    let theme = localStorage.getItem('theme');

    if (theme === null || theme === 'dark') {
        localStorage.setItem('theme', 'light');
    } else if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
    }
    setTheme();
}