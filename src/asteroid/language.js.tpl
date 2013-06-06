#!template asteroid/language.js

var DIRECTIONS =
    [['Left', 'left'],
     ['Right', 'right']
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

Blockly.Language.gtc_isasteroid={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.setOutput(true,Boolean);
		this.appendDummyInput()
			.appendTitle('Is there an asteroid to the ')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setInputsInline(true);
		this.setTooltip("Check if an asteroid is in the specified direction.");
	}
};
	 

#REPLACE: at the end is where you put any extra, common blocks
{% cat javascript/blockly_if.js %}
