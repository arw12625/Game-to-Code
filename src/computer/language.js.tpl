#!template computer/language.js

Blockly.JavaScript = Blockly.Generator.get("JavaScript");

Blockly.Language.gtc_waterfield={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Water Field');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Water your field.");
	}
};
Blockly.JavaScript.gtc_waterfield = function() {
    return "current_state = 0;\n";
};
Blockly.Language.gtc_clearfield={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Clear Field');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Clear your field.");
	}
};
Blockly.JavaScript.gtc_clearfield = function() {
    return "current_state = 1;\n";
};
Blockly.Language.gtc_plantfield={
	category:"Game-to-Code",
	init:function(){
		this.setColour(160);
		this.appendDummyInput()
			.appendTitle('Plant Field');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip("Plant your field.");
	}
};
Blockly.JavaScript.gtc_plantfield = function() {
    return "current_state = 2;\n";
};
