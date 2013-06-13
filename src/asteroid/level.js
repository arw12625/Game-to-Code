var space = new Image();
space.src = "images/space.png";
space.onload = function() { drawspace() };
var player = new Image();
player.src = "images/player.png";
var asteroid = new Image();
asteroid.src = "images/asteroid.png";

// asteroids[i] is the i-th column of the map, there will be one asteroid
//+ at the (x,y) point (i, asteroids[i]), where the top of the map is 0.
var asteroids;
var code;
var score;
var position;

var isRunning = false;

var NUM_COLUMNS = 7;
var MAX_COLUMN = NUM_COLUMNS - 1;
var MIN_COLUMN = 0;
// (position, NUM_ROWS) is the spaceship's position
var NUM_ROWS = 7;
var INITIAL_POSITION = 3;

function runcode() {
	if(!isRunning) {
		isRunning = true;
		showStopButton();
		asteroids = new Array();
		code = window.Blockly.Generator.workspaceToCode('JavaScript');
		score = 0;
		position = INITIAL_POSITION;
		for(var i = 0; i < NUM_COLUMNS; i++) {
		    // Randomly place one asteroid in each column somewhere about the top of the map
		    // The row will be between [-7, 0] including -7 and 0. (the 8 is arbitrary)
		    asteroids[i] = -1 * Math.floor(Math.random() * 8);
		}
		eq.addToQueue(function() { iterate(20) }, 0);
	}
}

function stopcode() {
    eq.empty();
    isRunning = false;
    hideStopButton();
}

function checkAsteroid(dir, dist) {
    var column = position + dir;
    var row = NUM_ROWS - dist;
    return asteroids[column] == row;
}

function checkAsteroidLeft(dist) {
    return position > 0 && checkAsteroid(-1, dist);
}

function checkAsteroidRight(dist) {
    return position < asteroids.length && checkAsteroid(+1, dist);
}

function checkAsteroidFront(dist) {
    return checkAsteroid(0, dist);
}

function moveShip(dir) {
    position += dir;
    position = Math.max(Math.min(position, MAX_COLUMN), MIN_COLUMN);
}

function iterate(n) {
	if(n > 0) {
		drawscene();
		drawscore(score);
		console.log(code);
		eval(code);
		/* Used to randomly choose a new position if they don't move,
		   but that seems kind of silly.  Sometimes it's a good idea 
		   to stay still */
		for(var i = 0; i < NUM_COLUMNS; i++) {
		    // move asteroids down
		    asteroids[i]++;
		    if (asteroids[i] > 6) {
			if (i == position) {
			    score -= 100;
			}
			// Random location above the map, between [-4, 0]
			asteroids[i] = -1 * Math.floor(Math.random() * 5);
			score += 10;
		    }
		}
		eq.addToQueue(function() { iterate(n - 1) }, 1500);
	} else {
	    stopcode();
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
	for(var i = 0; i < NUM_COLUMNS; i++) {
		if(asteroids[i] >= 0) {
			ctx.drawImage(asteroid, 30 + i * 64, 12 + asteroids[i] * 64);
		}
	}
}
function  drawscore(score) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.font ="30px Arial";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("SCORE: " + score,40,34);
}

