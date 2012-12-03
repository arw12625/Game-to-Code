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