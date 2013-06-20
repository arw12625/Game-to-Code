function loadintro(name) {
    window.location = name + '/intro.html';
}
function loadlevel() {
    window.location = 'level.html';
}
function loadhome() {
    window.location = '../index.html';
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

function showMessage(htmlMessage, color) {
    color = color || 'black';
    var messageDiv = document.getElementById('message_box');   // messageDiv is the whole div that is hidden/re-displayed
    var actualMessageDiv = document.getElementById('message_message');  // actualMessageDiv is where the text gets written to for the message
    actualMessageDiv.innerHTML = htmlMessage;
    // Sorry, I'll do this right some other day.
    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = color;
}

function hideMessage() {
    var messageDiv = document.getElementById('message_box');
    // Again... sorry.
    messageDiv.style.display = 'none';
}
