window.loadFunctions.clipboard = function() {
    // loop through all elements with attribute "data-clipboard"and add the click event listener and icon
    document.querySelectorAll('[data-clipboard]').forEach(function(element) {
        let input = element.getAttribute('data-clipboard');
        
        element.addEventListener('click', function() {
            clipboard(input);
        });

        if (input.includes("MD")) {
            element.innerHTML += '<img src="./assets/icons/markdown.png" height="17px"/>';
        } else {
            element.innerHTML += '<img src="./assets/icons/clipboard.png" height="17px"/>';
        }
    });
}

function clipboard(input) {
    let output = "";

    switch (input) {
        case "figlet":
            output = document.getElementById(input).innerHTML.replaceAll("<br>", "\n");
            break;
        case "figletMD":
            output = '```\n' + document.getElementById('figlet').innerHTML.replaceAll('<br>', '\n') + '\n```\n';
            break;
        case "color":
            output = '```ansi\n' + document.getElementById('colorOutput').value + '\n```\n';
            break;
        default:
            let copyText = document.getElementById(input);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            output = copyText.value;
            break;
    }
    navigator.clipboard.writeText(output);
}