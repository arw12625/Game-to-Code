var farm = new Array();
for(var i = 0; i < 8; i++) {
	farm[i] = new Image();
	farm[i].src = "images/farm_" + (i + 1) + ".png";
}
farm[0].onload = function() {draw(0);}

function hidehelp() {
	document.getElementById("overlay").style.display = "none";
}

function showhelp() {
	document.getElementById("overlay").style.display = "block";
}

var done = true;
function runcode() {
	if(done) {
		done = false;
		var code = window.Blockly.Generator.workspaceToCode('JavaScript').split("\n");
		code.pop();
		iterate(code, 0);
	}
}

function iterate(code, n) {
	if(n < code.length) {
		draw(2 * n);
		drawscore(n * 10);
		var state = 0;
		eval(code[n]);
		if(state == n) {
			setTimeout(function() {draw(2 * n + 1); drawscore(n * 10);}, 1000);
			setTimeout(function() {iterate(code, n + 1);}, 2000);
		}
	} else if(n == 3) {
		draw(2 * n + 1);
	}else {
		done = true;
	}
}

function  draw(n) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(farm[n], 0, 0);	
}

function  drawscore(score) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.font="30px Arial";
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillText("SCORE: " + score,40,34);
}