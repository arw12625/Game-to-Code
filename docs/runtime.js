function loadintro(name) {
	document.location = name + '.html';
}
function loadlevel(name) {
	document.location = 'runtime.html'
	loc = name;
	document.getElementById('level').location = name + '_level.html';
}