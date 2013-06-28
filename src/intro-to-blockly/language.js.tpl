#!template intro-to-blockly/language.js

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

var ORDERS = [['First', '1'],
	      ['Second', '2'],
	      ['Third', '3']]

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
    console.log("order is: " +  order);
    switch (order) {
    case '1':
	var code = "expect('none') && supply('one')";
	break;
    case '2':
	var code = "expect('one') && supply('two')";
	break;
    case '3':
	var code = "expect('two') && supply('three')";
	break;
    }
    return code + ";\n";
};

{% cat javascript/blockly_if.js %}
