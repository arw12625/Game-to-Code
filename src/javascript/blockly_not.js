Blockly.Language.not = {
    category: Blockly.LANG_CATEGORY_CONTROLS,
    init: function() {
	this.setColour(160);
	this.setOutput(true, Boolean);
	this.appendDummyInput().appendTitle('not ');
	this.appendValueInput('IN').setCheck(Boolean);
	this.setInputsInline(true);
	this.setTooltip('Returns the logical not of its input.  In short, true becomes false, and false becomes true');
    }
};

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.JavaScript.not = function() {
    var input = Blockly.JavaScript.valueToCode(this, 'IN', Blockly.JavaScript.ORDER_NONE) || false;
    var code = "(! (" + input + "))";
    return [code, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

