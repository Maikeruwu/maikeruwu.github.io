window.loadFunctions = {};

window.onload = function() {
    for (let i = 0; i < Object.keys(window.loadFunctions).length; i++) {
        window.loadFunctions[Object.keys(window.loadFunctions)[i]]();
    }
}