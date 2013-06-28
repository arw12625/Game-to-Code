res.load("expected.png", 
	 function() { draw() });
res.load("checkmark.png");
res.load("error.png");

var isRunning = false;
var current_expect_state;
function runcode() {
    if (!isRunning) {
	isRunning = true;
	var code = window.Blockly.Generator.workspaceToCode('JavaScript');
	showStopButton();
	current_expect_state = "none";
	hasPressedStop = false;
	console.log("code is:" + code);
	// Each line is separated by a newline
	var linesOfCode = code.split("\n");
	console.log("linesOfCode is: " + linesOfCode);
	eq.addToQueue(function() { draw(); drawcheckmarks() }, 0);
	for (var i=0;i<linesOfCode.length;i++) {
	    (function (scopedLine) {
		eq.addToQueue(function() { console.log("current line:" + scopedLine); eval(scopedLine) }, 0);
		eq.addToQueue(function() { draw(); drawcheckmarks() }, 1000);
	    })(linesOfCode[i]);
	}
	eq.addToQueue(function() { finishLevel() }, 0);
    }
}

function finishLevel() {
    if (expect('three')) {
	//showFinishMessage();
	stopcode();
    }
}

function stopcode() {
    eq.empty();
    hideStopButton();
    hasPressedStop = true;
    isRunning = false;
}

function expect(what) {
    console.log("expecting " + what + ", but got " + current_expect_state);
    return current_expect_state === what;
}

function supply(what) {
    console.log("setting state to " + what);
    current_expect_state = what;
}

function draw() {
    var img = res.get("expected.png");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 1000000, 1000000);
    ctx.drawImage(img, 0, 0);
}

function drawcheckmarks() {
    var img = res.get("checkmark.png");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var positions = [[0, 8], [0, 35], [0, 62]];
    for (var i=0;i<positions.length;i++) {	
	if (i == 0 && expect('none')
	    || i == 1 && expect('one')
	    || i == 2 && expect('two')) {
	    img = res.get("error.png");
	}
	ctx.drawImage(img, positions[i][0], positions[i][1]);
    }
}