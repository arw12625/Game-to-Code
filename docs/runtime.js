function loadlevelforreal(name) {
	document.write("<script src='" + name + ".js' type='text/javascript'></script>");
	alert("EHY");
}

function runcode() {
	var code = window.Blockly.Generator.workspaceToCode('JavaScript');
	alert(code);
	eval(code);
}

var svgns = "http://www.w3.org/2000/svg";
function draw() {
	alert('drawing');
	var shape = document.createElementNS(svgns, "rect");
	shape.setAttribute("x", 5);
	shape.setAttribute("y", 5);
	shape.setAttribute("width",  200);
	shape.setAttribute("height",  200);
	shape.setAttribute("fill", "green");
	document.getElementById('svggame').appendChild(shape);
	alert("EHY");
}