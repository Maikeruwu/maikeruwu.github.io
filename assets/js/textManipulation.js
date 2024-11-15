window.loadFunctions.textManipulation = function() {
    document.getElementById("altButton").onclick = altCase;
    document.getElementById("spaceButton").onclick = spaceCase;
    document.getElementById("figletButton").onclick = figlet;
    document.getElementById("colorButton").onclick = color;
}

function altCase() {
    let chars = Array.from(document.getElementById("altNormal").value.toLowerCase());
    
    for (let i = 1; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    document.getElementById("alt").value = chars.join("");
}

function spaceCase() {
    document.getElementById("space").value = document.getElementById("spaceNormal").value.replace(/(.{1})/g,"$1 ");
}

function figlet() {
    let input = document.getElementById("figletNormal").value;
    let url = 'https://uploadbeta.com/api/figlet/?cached&msg=' + input;
    let figlet = Get(url);
    figlet = figlet.substring(1, figlet.length - 1);
    figlet = figlet.replace(/\\n/g, '<br>');
    figlet = figlet.replace(/\\\\/g, '\\');
    figlet = figlet.replace(/\\\//g, '/');
    document.getElementById('figlet').innerHTML = figlet;
}

function radio(button) {
    let container = document.getElementById("colors");

    if (button == "normal") {
        container.style = "display: block;";
    } else if (button == "rainbow") {
        container.style = "display: none;";
    }
}

function color() {
    const container = document.getElementById("color");
    container.replaceChildren(document.createElement("br"));

    const input = document.getElementById("colorNormal").value;
    const inputArray = Array.from(input);
    let color = "";
    let colorCase = 1;
    
    if (document.getElementById("normal").checked) {
        let colorCheckboxes = new Array;
        let beginCase = false;

        for (let i = 0; i < 8; i++) {
            colorCheckboxes[i] = document.getElementById(i + 1);

            if (colorCheckboxes[i].checked && !beginCase) {
                colorCase = i + 1;
                beginCase = true;
            }
        }

        for (let i = 0; i < inputArray.length; i++) {
            let nobr = document.createElement("nobr");  
            nobr.appendChild(document.createTextNode(inputArray[i]));

            if (inputArray[i] != ' ') {
                let foundCase = false;
                
                switch (colorCase) {
                    case 1:
                        color += "[2;30m" + inputArray[i] + "[0m";
                        nobr.style = "color: #4f545c;";
                        colorCase = 0;

                        for (let j = 1; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            if (colorCheckboxes[0].checked) {
                                colorCase = 1;
                            } else {
                                colorCase = 2;
                            }
                        }
                        break;
                    case 2:
                        color += "[2;31m" + inputArray[i] + "[0m";
                        nobr.style = "color: #dc322f;";
                        colorCase = 0;

                        for (let j = 2; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        for (let j = 0; j < 2 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 3;
                        }
                        break;
                    case 3:
                        color += "[2;32m" + inputArray[i] + "[0m";
                        nobr.style = "color: #859900;";
                        colorCase = 0;

                        for (let j = 3; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        for (let j = 0; j < 3 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 4;
                        }
                        break;
                    case 4:
                        color += "[2;33m" + inputArray[i] + "[0m";
                        nobr.style = "color: #b58900;";
                        colorCase = 0;

                        for (let j = 4; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        for (let j = 0; j < 4 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 5;
                        }
                        break;
                    case 5:
                        color += "[2;34m" + inputArray[i] + "[0m";
                        nobr.style = "color: #268bd2;";
                        colorCase = 0;

                        for (let j = 5; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        for (let j = 0; j < 5 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 6;
                        }
                        break;
                    case 6:
                        color += "[2;35m" + inputArray[i] + "[0m";
                        nobr.style = "color: #d33682;";
                        colorCase = 0;

                        for (let j = 6; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        for (let j = 0; j < 6 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 7;
                        }
                        break;
                    case 7:
                        color += "[2;36m" + inputArray[i] + "[0m";
                        nobr.style = "color: #2aa198;";
                        colorCase = 0;

                        if (colorCheckboxes[7].checked) {
                            colorCase = 8;
                            foundCase = true;
                        }
                        for (let j = 0; j < 7 && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 8;
                        }
                        break;
                    case 8:
                        color += "[2;37m" + inputArray[i] + "[0m";
                        nobr.style = "color: #ffffff;";
                        colorCase = 0;

                        for (let j = 0; j < colorCheckboxes.length && !foundCase; j++) {
                            if (colorCheckboxes[j].checked) {
                                colorCase = j + 1;
                                foundCase = true;
                            }
                        }
                        if (colorCase == 0) {
                            colorCase = 1;
                        }
                        break;
                    default:
                        color += "|" + inputArray[i] + "|";
                }
            } else {
                color += " ";
            }
            container.appendChild(nobr);
        }
    } else if (document.getElementById("rainbow").checked) {
        for (let i = 0; i < inputArray.length; i++) {
            let nobr = document.createElement("nobr");  
            nobr.appendChild(document.createTextNode(inputArray[i]));

            if (inputArray[i] != ' ') {
                switch (colorCase) {
                    case 1:
                        color += "[2;31m" + inputArray[i] + "[0m";
                        nobr.style = "color: #dc322f;";
                        colorCase++;
                        break;
                    case 2:
                        color += "[2;33m" + inputArray[i] + "[0m";
                        nobr.style = "color: #b58900;";
                        colorCase++;
                        break;
                    case 3:
                        color += "[2;32m" + inputArray[i] + "[0m";
                        nobr.style = "color: #859900;";
                        colorCase++;
                        break;
                    case 4:
                        color += "[2;36m" + inputArray[i] + "[0m";
                        nobr.style = "color: #2aa198;";
                        colorCase++;
                        break;
                    case 5:
                        color += "[2;34m" + inputArray[i] + "[0m";
                        nobr.style = "color: #268bd2;";
                        colorCase++;
                        break;
                    case 6:
                        color += "[2;35m" + inputArray[i] + "[0m";
                        nobr.style = "color: #d33682;";
                        colorCase = 1;
                        break;
                    default:
                        color += "|" + inputArray[i] + "|";
                }
            } else {
                color += " ";
            }
            container.appendChild(nobr);
        }
    }
    document.getElementById("colorOutput").value = color;
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
}

function Get(yourUrl) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}