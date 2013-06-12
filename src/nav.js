function loadintro(name) {
    window.location = name + '/intro.html';
}
function loadlevel() {
    window.location = 'level.html';
}
function loadhome() {
    window.location = '../';
}
function hidehelp() {
	document.getElementById("overlay").style.display = "none";
	done = true;
}

function showhelp() {
	document.getElementById("overlay").style.display = "block";
}
function hideStopButton() {
    document.getElementById("stop-button").style.visibility = "hidden";
}
function showStopButton() {
    document.getElementById("stop-button").style.visibility = "visible";
}
