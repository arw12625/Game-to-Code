var space = new Image();
space.src = "images/space.png";
space.onload = function() {drawspace();}
var player = new Image();
player.src = "images/player.png";
var asteroid = new Image();
asteroid.src = "images/asteroid.png";

function hidehelp() {
	document.getElementById("overlay").style.display = "none";
	done = true;
}

function showhelp() {
	document.getElementById("overlay").style.display = "block";
}


var done;
var asteroids;
var code;
var score;
var position;

function runcode() {
	if(done) {
		done = false;
		asteroids = new Array();
		code = window.Blockly.Generator.workspaceToCode('JavaScript');
		alert(code);
		score = 0;
		position = 3;
		for(var i = 0; i < 7; i++) {
			asteroids[i] = -Math.floor(Math.random() * 8);
		}
		iterate(20);
	}
}

function iterate(n) {
	if(n > 0) {
		drawscene();
		drawscore(score);
		//eval(code);
		Math.random() > .5 ? position++ : position--;
		position = Math.max(Math.min(position, 6), 0);
		for(var i = 0; i < asteroids.length; i++) {
			asteroids[i]++;
			if(asteroids[i] > 6) {
				if(i == position) {
					score = score - 100;
				}
				asteroids[i] = -Math.floor(Math.random() * 5);
				score = score + 10;
			}
		}
		setTimeout(function() {iterate(n - 1)}, 1500);
	} else {
		done = true;
	}
}

function drawspace() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(space, 0, 0);
}

function  drawscene() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(space, 0, 0);
	ctx.drawImage(player, 30 + position * 64, 472);
	for(var i = 0; i < asteroids.length; i++) {
		if(asteroids[i] >= 0) {
			ctx.drawImage(asteroid, 30 + i * 64, 12 + asteroids[i] * 64);
		}
	}
}
function  drawscore(score) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.font="30px Arial";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("SCORE: " + score,40,34);
}