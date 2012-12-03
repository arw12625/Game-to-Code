function loadintro(name) {
	document.location = name + '.html';
}
function loadlevel(name) {
	document.location = 'runtime.html';
}
function runcode() {
	var code = window.Blockly.Generator.workspaceToCode('JavaScript');
	alert(code);
	eval(code);
}