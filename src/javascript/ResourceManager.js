var ResourceManager = function() {
    this.images = {};
};

ResourceManager.prototype.load = function(image_name, callback) {
    var img = new Image();
    var real_callback = callback || function() { };
    img.onload = function() {
	this.images[image_name].loaded = true;
	real_callback();
    };
    img.src = image_name;
    this.images[image_name] = {
	loaded: false,
	image: img
    };
};

ResourceManager.prototype.get = function(image_name) {
    return this.images[image_name].loaded
	? this.images[image_name].image
	: new Image();
};

res = new ResourceManager();