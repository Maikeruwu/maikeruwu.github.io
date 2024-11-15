window.loadFunctions.encoder = function() {
    document.getElementById("qwertzShiftRightButton").onclick = qwertzShiftRight;
    document.getElementById("qwertzShiftLeftButton").onclick = qwertzShiftLeft;
    document.getElementById("uriEncodeButton").onclick = uriEncode;
    document.getElementById("uriDecodeButton").onclick = uriDecode;
}

function qwertzShiftRight() {
    let chars = Array.from(document.getElementById("qwertzShiftRightNormal").value.toLowerCase().replace(/\s/g, ""));
    let qwertzShiftRight = ""
    const rows = [['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['y', 'x', 'c', 'v', 'b', 'n', 'm']];

    for (let i = 0; i < chars.length; i++) {
        // Shift all characters from chars array one to the right with the keyboard rows array
        let changed = false;

        for (let j = 0; j < rows.length && !changed; j++) {
            for (let k = 0; k < rows[j].length && !changed; k++) {
                if (chars[i] == rows[j][k]) {
                    if (k == rows[j].length - 1) {
                        qwertzShiftRight += rows[j][0] + "";
                        changed = true;
                    } else {
                        qwertzShiftRight += rows[j][k + 1] + "";
                        changed = true;
                    }
                }
            }
        }
        if (!changed) {
            chars.splice(i, 1);
        }
    }
    document.getElementById("qwertzShiftRight").value = qwertzShiftRight;
}

function qwertzShiftLeft() {
    let chars = Array.from(document.getElementById("qwertzShiftLeftNormal").value.toLowerCase().replace(/\s/g, ""));
    let qwertzShiftLeft = ""
    const rows = [['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['y', 'x', 'c', 'v', 'b', 'n', 'm']];

    for (let i = chars.length - 1; i >= 0; i--) {
        // Shift all characters from chars array one to the left with the keyboard rows array
        let changed = false;

        for (let j = rows.length - 1; j >= 0 && !changed; j--) {
            for (let k = rows[j].length - 1; k >= 0 && !changed; k--) {
                if (chars[i] == rows[j][k]) {
                    if (k == 0) {
                        qwertzShiftLeft = rows[j][rows[j].length - 1] + qwertzShiftLeft;
                        changed = true;
                    } else {
                        qwertzShiftLeft = rows[j][k - 1] + qwertzShiftLeft;
                        changed = true;
                    }
                }
            }
        }
        if (!changed) {
            chars.splice(i, 1);
        }
    }
    document.getElementById("qwertzShiftLeft").value = qwertzShiftLeft;
}

function uriEncode() {
    document.getElementById("uriEncode").value = encodeURIComponent(document.getElementById("uriEncodeNormal").value);
}

function uriDecode() {
    document.getElementById("uriDecode").value = decodeURIComponent(document.getElementById("uriDecodeNormal").value);
}