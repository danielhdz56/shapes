var {Shape} = require('./Shape');

var Square = function(sides) {
    this.sides = sides;
};
Square.prototype = new Shape;
Square.prototype.constructor = Square;
module.exports = {Square};