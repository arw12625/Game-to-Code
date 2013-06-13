#!template logic/language.js

var LOCATIONS =
    [['Left', 'left'],
     ['Right', 'right']];
	 
Blockly.Language.gtc_isblocking={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.setOutput(true,Boolean);
		this.appendDummyInput()
			.appendTitle('Is Blocking')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setInputsInline(true);
		this.setTooltip("Tells if your opponent will block in the specified location");
	}
};

Blockly.Language.gtc_ispunching={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.setOutput(true,Boolean);
		this.appendDummyInput()
			.appendTitle('Is Punching')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setInputsInline(true);
		this.setTooltip("Tells if your opponent will punch in the specified location");
	}
};

Blockly.Language.gtc_block={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Block')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Block your opponent in the specified location");
	}
};
	 
Blockly.Language.gtc_punch={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Punch')
			.appendTitle(new Blockly.FieldDropdown(LOCATIONS), 'LOC');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Punch your opponent in the specified location");
	}
};

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.JavaScript.gtc_isblocking = function() {
  var loc = this.getTitleValue('LOC');
  var code = "(\'"+loc+"\'==opp_loc) && (opp_state == 'block')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.gtc_ispunching = function() {
  var loc = this.getTitleValue('LOC');
  var code = "(\'"+loc+"\'==opp_loc) && (opp_state == 'punch')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.gtc_punch = function() {
  var loc = this.getTitleValue('LOC');
  var code = "usr_state = 'punch';\nusr_loc = \'"+loc+"\';\n";
  return code;
};

Blockly.JavaScript.gtc_block = function() {
  var loc = this.getTitleValue('LOC');
  var code = "usr_state = 'block';\nusr_loc = \'"+loc+"\';\n";
  return code;
};

{% cat javascript/blockly_if.js %}
