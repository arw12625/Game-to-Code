var ResourceManager = function() {
    this.images = {};
    this.prefix = "images/";
};

ResourceManager.prototype.load = function(image_name, callback) {
    var that = this;
    var img = new Image();
    var real_callback = callback || function() { };
    img.onload = function() {
	that.images[image_name].loaded = true;
	real_callback();
    };
    this.images[image_name] = {
	loaded: false,
	image: img
    };
    img.src = this.prefix + image_name;
};

ResourceManager.prototype.get = function(image_name) {
    return this.images[image_name].loaded
	? this.images[image_name].image
	: new Image();
};

res = new ResourceManager();