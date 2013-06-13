// Populate farm with the images, farm_1, farm_2, ..., farm_8
// even images are the first part of the animation, odd are the second
// farm_1 is the opening picture
var farm = new Array();
for(var i = 0; i < 8; i++) {
    farm[i] = new Image();
    farm[i].src = "images/farm_" + (i + 1) + ".png";
}
farm[0].onload = function() { draw(0); };

var expectedState = null;
var isRunning = false;
var score = 0;
var FIRST_STATE = 0;
var LAST_STATE = 2;
var FIRST_IMAGE = 0;
var INITIAL_SCORE = 0;
function runcode() {
    if(!isRunning) {
	isRunning = true;
	showStopButton();
	// this seems really hacky.  A comment would have been great here.
	// Each statement/block that's written in Blockly gets written with a 
	//+ newline to separate them.  We need it to execute each part in order
	//+ with a pretty large pause between them, so we split on the newlines
	//+ Additionally, there's one extra newline at the end, which causes 
	//+ there to be an empty block at the end, so we pop it off.
	var code = window.Blockly.Generator.workspaceToCode('JavaScript').split("\n");
	code.pop();
	score = INITIAL_SCORE;
	expectedState = FIRST_STATE;
	for (var i=0; i<code.length; i++) {
	    (function (scoped_i) {
		eq.addToQueue(function() {
			draw(2*scoped_i);
			executeCurrent(code[scoped_i]);
		    },
		    1000);
		eq.addToQueue(function() {
			draw(2*scoped_i + 1);
		    },
		    1000);
	    })(i);
	}
	eq.addToQueue(function() { isRunning = false; hideStopButton() }, 0);
    }
}

function stopcode() {
    eq.empty();
    draw(FIRST_IMAGE);
    hideStopImage();
    isRunning = false;
}

function executeCurrent(code) {
    var current_state = null;
    eval(code); // This should look something like: current_state = 2;
                // if (this is the same as the current state we _should_ be at), then hooray!
    if (current_state == expectedState) {
	// Woohoo!
	if (current_state == LAST_STATE) {
	    score = 100;
	    console.log("finished game");
	    var finalImage = farm.length - 1;
	    eq.addToQueue(function() { draw(finalImage) }, 0);
	    isRunning = false;
	    hideStopButton();
	} else {
	    console.log("score increased");
	    score += 33;
	    expectedState++;
	}
    } else {
	console.log("incorrect state, expected " + expectedState + ", got " + current_state);
	eq.empty();
    }
}


function  draw(n) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(farm[n], 0, 0);	
    drawscore(score);
}

function  drawscore(score) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font="30px Arial";
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillText("SCORE: " + score,40,34);
}

