window.loadFunctions.clock = function() {
    setInterval(updateClock, 100);
};

let days = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
let months = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");

function updateClock() {
    let currentDate = new Date();
    document.getElementById("timeNow").innerHTML = currentDate.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = days[currentDate.getDay()] + ", " + currentDate.getDate() + ". " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
    document.getElementById("calendarWeek").innerHTML = Math.ceil(( currentDate.getDay() + 1 + Math.floor((currentDate - new Date(currentDate.getFullYear(),0,1)) / (24 * 60 * 60 * 1000))) / 7);
    document.getElementById("dst").innerHTML = Intl.DateTimeFormat(undefined, {timeZoneName: 'long'}).formatToParts(currentDate).find((part) => part.type == 'timeZoneName').value;
}