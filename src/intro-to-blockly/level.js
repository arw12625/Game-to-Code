res.load("expected.png", 
	 function() { draw() });
res.load("checkmark.png");

var isRunning = false;
var current_expect_state = "none";
function runcode() {
    if (!isRunning) {
	isRunning = true;
	var code = window.Blockly.Generator.workspaceToCode('JavaScript');
	showStopButton();
	hasPressedStop = false;
	// Each line is separated by a newline
	var linesOfCode = code.split("\n");
	for (var line in linesOfCode) {
	    eq.addToQueue(function() { eval(line) }, 0);
	    eq.addToQueue(function() { draw(); drawcheckmarks() }, 1000);
	}
    }
}

function stopcode() {
    eq.empty();
    hideStopButton();
    hasPressedStop = true;
    isRunning = false;
}

function expect(what) {
    return current_expect_state === what;
};

function supply(what) {
    current_expect_state = what;
};

function draw() {
    var img = res.get("expected.png");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
}

function drawcheckmarks() {
    alert(current_expect_state);
}