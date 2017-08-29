var {Shape} = require('./Shape');

var Triangle = function(side1, side2, side3) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
}

Triangle.prototype = new Shape;
// necessary to explictly define if we later want to clone this object. 
//If we didn't every clone of this would point to the Shape constructor.
Triangle.prototype.constructor = Triangle; 
module.exports = {Triangle};