window.loadFunctions.timeNow = function() {
    setInterval(function() { 
        document.getElementById("timeNow").innerHTML = new Date().toLocaleTimeString(); 
    }, 100);
};