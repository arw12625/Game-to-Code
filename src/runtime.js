var ExecutionQueue = function() {
    this.queue = [];
    this.delays = [];
    this.lastTime = null;
    // RUN_TIME_DELAY is used if there are no items in the queue
    this.RUN_TIME_DELAY = 1000; // ms
    // SHORT_DELAY is used to give a very short delay between run() and the function in the queue
    this.SHORT_DELAY = 100; // ms
    // SHORTEST_DELAY is the shortest amount of time a function can last
    this.SHORTEST_DELAY = this.SHORT_DELAY + 100; // ms
};
// delay in ms, used for SetTimeout
ExecutionQueue.prototype.addToQueue = function(fun, delay) {
    if (delay < this.SHORTEST_DELAY) {
	delay = this.SHORTEST_DELAY;
    }
    this.queue.push(fun);
    this.delays.push(delay);
};
ExecutionQueue.prototype.empty = function() {
    this.queue = [];
    this.delays = [];
};
// execute runs one function, run() is for the whole process
ExecutionQueue.prototype.execute = function() {
    // Warning, shift() does not run in constant time, might be bad for performance
    var fun = this.queue.shift();
    fun !== undefined && fun();
};
ExecutionQueue.prototype.DoNothing = function() {
    return function() { };
};
ExecutionQueue.prototype.run = function() {
    var that = this;
    if (this.queue !== null && this.queue.length > 0) {
	setTimeout(function() { that.execute() }, this.SHORT_DELAY);
	setTimeout(function() { that.run() }, this.delays.shift());
    } else {
	setTimeout(function() { that.run() }, this.RUN_TIME_DELAY);
    }
};
    
var eq = new ExecutionQueue();
eq.run();
