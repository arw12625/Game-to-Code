#!template asteroid/language.js

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

var DIRECTIONS =
    [['Left', 'left'],
     ['Right', 'right'],
     ['Forward', 'forward']];
	 
var LOCATIONS =
    [['Left', 'left'],
     ['Right', 'right']];

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
  var code = (loc == 'left' ? "position--" : "position++")+ ";\n";
  return code;
};

Blockly.Language.gtc_isasteroid={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.setOutput(true,Boolean);
		this.appendDummyInput()
			.appendTitle('Is there an asteroid to the ')
			.appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'LOC');
		this.setInputsInline(true);
		this.setTooltip("Check if an asteroid is in the specified direction.");
	}
};


Blockly.JavaScript.gtc_isasteroid = function() {
  var loc = this.getTitleValue('LOC');
  var code = "";
  if(loc == 'left') {
	code = "position > 0 && asteroids[position - 1] == 6";
  }
  if(loc == 'right') {
	code = "position < asteroids.length - 1 && asteroids[position + 1] == 6";
  }
  if(loc == 'forward') {
	code = "asteroids[position] == 6";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};	 

{% cat javascript/blockly_if.js %}
