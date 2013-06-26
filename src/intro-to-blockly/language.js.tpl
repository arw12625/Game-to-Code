#!template intro-to-blockly/language.js

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

var ORDERS = [['First', 'expect("none") && supply("one")'],
	      ['Second', 'expect("one") && supply("two")'],
	      ['Third', 'expect("two") && supply("three")']];

Blockly.Language.gtc_order = {
    category: "Game-to-Code",
    init: function() {
	this.setColour(160);
	this.appendDummyInput()
	    .appendTitle('This should be ')
	    .appendTitle(new Blockly.FieldDropdown(ORDERS), 'ORDER');
	this.setInputsInline(true);
	this.setNextStatement(true);
	this.setPreviousStatement(true);
	this.setTooltip("Make sure these are in order");
    }
};

Blockly.JavaScript.gtc_order = function() {
    var order = this.getTitleValue('ORDER');
    var code = order + ";\n";
    return code;
};

{% cat javascript/blockly_if.js %}
