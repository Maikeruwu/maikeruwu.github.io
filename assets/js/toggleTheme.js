window.loadFunctions.theme = function() {
    if (!window.matchMedia) {
        document.body.classList.add("light");
        return;
    }
    let media = window.matchMedia('(prefers-color-scheme: dark)');

    if (media.matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        document.body.classList.toggle("dark", e.matches);
        document.body.classList.toggle("light", !e.matches);
    });

    let themeToggle = document.createElement('button');
    themeToggle.style = 'float: right;';
    themeToggle.onclick = toggleTheme;
    themeToggle.innerHTML = '<img src="./assets/icons/day-and-night.png" height="17px" style="float: left; text-align: left;">';
    document.body.insertBefore(themeToggle, document.body.firstChild);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}