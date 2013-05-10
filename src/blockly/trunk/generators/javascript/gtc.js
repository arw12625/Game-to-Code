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

Blockly.JavaScript.gtc_clearfield = function() {
  var code = "state = 0;\n";
  return code;
};

Blockly.JavaScript.gtc_plantfield = function() {
  var code = "state = 1;\n";
  return code;
};

Blockly.JavaScript.gtc_waterfield = function() {
  var code = "state = 2;\n";
  return code;
};

Blockly.JavaScript.gtc_move = function() {
  var loc = this.getTitleValue('LOC');
  var code = (loc == 'left' ? "position--" : "position++")+ ";\n";
  return code;
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

Blockly.JavaScript.controls_if = function() {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.JavaScript.valueToCode(this, 'IF' + n,
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= this.elseifCount_; n++) {
    argument = Blockly.JavaScript.valueToCode(this, 'IF' + n,
        Blockly.JavaScript.ORDER_NONE) || 'false';
    branch = Blockly.JavaScript.statementToCode(this, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (this.elseCount_) {
    branch = Blockly.JavaScript.statementToCode(this, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '\n';
};