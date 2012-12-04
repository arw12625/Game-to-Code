Blockly.Language.text_lengthmy = {
		category: 'Text',
		helpUrl: 'http://www.w3schools.com/jsref/jsref_length_string.asp',
		init: function() {
			this.setColour(160);
			this.appendValueInput("VALUE")
				.setCheck(String)
				.appendTitle("mylength");
			this.setOutput(true, Number);
			this.setTooltip('Returns number of letters in the provided text.');
		}
	};

function showhelp() {
	alert("SUP");
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