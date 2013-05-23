var boxer = new Image();
boxer.src = "images/boxer.png";
boxer.onload = function() {drawopp();}
var opp_block = new Image();
opp_block.src = "images/opp_block.png";
var opp_punch = new Image();
opp_punch.src = "images/opp_punch.png";
var usr_block = new Image();
usr_block.src = "images/usr_block.png";
var usr_punch = new Image();
usr_punch.src = "images/usr_punch.png";

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
		var code = window.Blockly.Generator.workspaceToCode('JavaScript');
		//alert(code);
		iterate(10, code, 0);
	}
}

function iterate(n, code, score) {

	if(n > 0) {
		drawopp();
		drawscore(score);
		var opp_loc = (Math.random() < 0.5) ? "left" : "right";
		var opp_state = (Math.random() < 0.5) ? "block" : "punch";
		var usr_loc = (Math.random() < 0.5) ? "left" : "right";
		var usr_state = (Math.random() < 0.5) ? "block" : "punch";
		eval(code);
		if(usr_state != opp_state) {
			if(usr_state == 'punch' && usr_loc != opp_loc || usr_state == 'block' && usr_loc == opp_loc) {
				score = score + 10;
			} else {
				score = score - 10;
			}
		}
		setTimeout(function() {drawopploc(opp_state, opp_loc)}, 1000);
		setTimeout(function() {drawusrloc(usr_state, usr_loc)}, 2000);
		setTimeout(function() {drawscore(score)}, 2500);
		setTimeout(function() {iterate(n - 1, code, score)}, 3000);
	} else {
		done = true;
	}
}

function  drawopp() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(boxer, 0, 0);	
}
function  drawopploc(opp_state, opp_loc) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var block = opp_state == 'block' ? opp_block : opp_punch;
	if(opp_loc == 'left') {
		ctx.drawImage(block, 30, 180);
	} else {
		ctx.drawImage(block, 270, 180);
	}
}
function  drawusrloc(usr_state, usr_loc) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var block = usr_state == 'block' ? usr_block : usr_punch;
	if(usr_loc == 'left') {
		ctx.drawImage(block, 30, 320);
	} else {
		ctx.drawImage(block, 270, 320);
	}
}
function  drawscore(score) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0, 0, 480, 34);
	ctx.font="30px Arial";
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillText("SCORE: " + score,40,34);
}
/*Blockly.Language.variables_get = {
  category: null,
  helpUrl: 'http://en.wikipedia.org/wiki/Variable_%28computer_science%29',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_VARIABLES_GET_TITLE)
        .appendTitle(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_GET_ITEM), 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

Blockly.Language.variables_set = {
  category: null,
  helpUrl: 'http://en.wikipedia.org/wiki/Variable_%28computer_science%29',
  init: function() {
    this.setColour(330);
    this.appendValueInput('VALUE')
        .appendTitle(Blockly.LANG_VARIABLES_SET_TITLE)
        .appendTitle(new Blockly.FieldVariable(
        Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_VARIABLES_SET_TOOLTIP);
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};*/