window.loadFunctions.timestamp = function() {
    document.getElementById("timestampNowButton").onclick = timestampNow;
    document.getElementById("timestampOfDateButton").onclick = timestampOfDate;
    document.getElementById("dateOfTimestampButton").onclick = dateOfTimestamp;
}

function timestampNow() {
    document.getElementById('timestampNow').value = new Date().getTime();
}

function timestampOfDate() {
    document.getElementById('ofDate').value = ~~new Date(
        document.getElementById('timestampOfDate').value
    ).getTime().toString().substring(0, 10);
}

function dateOfTimestamp() {
    document.getElementById('ofTimestamp').value = new Date(
        Number.parseInt(document.getElementById('dateOfTimestamp').value)
    ).toLocaleString();
}
