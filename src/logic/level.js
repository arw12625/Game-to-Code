var boxer = new Image();
boxer.src = "images/boxer.png";
boxer.onload = function() { drawopp() };
var opp_block = new Image();
opp_block.src = "images/opp_block.png";
var opp_punch = new Image();
opp_punch.src = "images/opp_punch.png";
var usr_block = new Image();
usr_block.src = "images/usr_block.png";
var usr_punch = new Image();
usr_punch.src = "images/usr_punch.png";

var done = true;
var isRunning = false;
var hasPressedStop = false;
function runcode() {
	if(!isRunning) {
		isRunning = true;
		var code = window.Blockly.Generator.workspaceToCode('JavaScript');
		//alert(code);
		showStopButton();
		hasPressedStop = false;
		eq.addToQueue(function() { iterate(10, code, 0) }, 0);
	}
}

function stopcode() {
    eq.empty();
    hideStopButton();
    hasPressedStop = true;
    isRunning = false;
}

function iterate(n, code, score) {

	if(n > 0 && !hasPressedStop) {
		drawopp();
		drawscore(score);
		var opp_loc = (Math.random() < 0.5) ? "left" : "right";
		var opp_state = (Math.random() < 0.5) ? "block" : "punch";
		var usr_loc = (Math.random() < 0.5) ? "left" : "right";
		var usr_state = (Math.random() < 0.5) ? "block" : "punch";
		console.log(code);
		eval(code);
		if(usr_state != opp_state) {
			if(usr_state == 'punch' && usr_loc != opp_loc || usr_state == 'block' && usr_loc == opp_loc) {
				score = score + 10;
			} else {
				score = score - 10;
			}
		}
		eq.addToQueue(function() { drawopploc(opp_state, opp_loc) }, 1000);
		eq.addToQueue(function() { drawusrloc(usr_state, usr_loc) }, 500);
		eq.addToQueue(function() { drawscore(score) }, 500);
		eq.addToQueue(function() { iterate(n - 1, code, score) }, 1000);
	} else {
	    stopcode();
	}
}

function drawopp() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(boxer, 0, 0);	
}
function drawopploc(opp_state, opp_loc) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var block = opp_state == 'block' ? opp_block : opp_punch;
	if(opp_loc == 'left') {
		ctx.drawImage(block, 30, 180);
	} else {
		ctx.drawImage(block, 270, 180);
	}
}
function drawusrloc(usr_state, usr_loc) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var block = usr_state == 'block' ? usr_block : usr_punch;
	if(usr_loc == 'left') {
		ctx.drawImage(block, 30, 320);
	} else {
		ctx.drawImage(block, 270, 320);
	}
}
function drawscore(score) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0, 0, 480, 34);
	ctx.font="30px Arial";
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillText("SCORE: " + score,40,34);
}
