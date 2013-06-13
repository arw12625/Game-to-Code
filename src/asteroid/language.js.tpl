#!template asteroid/language.js

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

var DIRECTIONS =
    [['Left', 'left'],
     ['Right', 'right'],
     ['Front', 'front']];
	 
var LOCATIONS =
    [['Left', 'left'],
     ['Right', 'right']];

var DISTANCES =
    [['One Unit Ahead', 'one'],
     ['Two Units Ahead', 'two']];

Blockly.Language.gtc_move={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Move')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Move in the specified direction.");
	}
};

Blockly.JavaScript.gtc_move = function() {
  var loc = this.getTitleValue('LOC');
  var code = "moveShip(" + (loc == 'left' ? -1 : +1) + ");\n";
  return code;
};

Blockly.Language.gtc_isasteroid={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.setOutput(true, Boolean);
		this.appendDummyInput()
		.appendTitle('Is there an asteroid to the')
		.appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'LOC')
		.appendTitle(', ')
		.appendTitle(new Blockly.FieldDropdown(DISTANCES), 'DIST');
		this.setInputsInline(true);
		this.setTooltip("Check if an asteroid is in the specified direction.");
	}
};

Blockly.JavaScript.gtc_isasteroid = function() {
  var loc = this.getTitleValue('LOC');
  var dist = this.getTitleValue('DIST');
  var numDist = dist == "one" ? 1 : 2;
  var code = "";
  // asteroidCheckDIRECTION is defined in level.js
  if(loc == 'left') {
      code = "checkAsteroidLeft(" + numDist + ")";
  }
  if(loc == 'right') {
      code = "checkAsteroidRight(" + numDist + ")";
  }
  if(loc == 'front') {
      code = "checkAsteroidFront(" + numDist + ")";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};	 

{% cat javascript/blockly_if.js %}

{% cat javascript/blockly_not.js %}
