var {Shape} = require('./Shape');

var Pentagon = function(side1, side2, side3, side4, side5) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3,
    this.side4 = side4,
    this.side5 = side5
}

Pentagon.prototype = new Shape;
Pentagon.prototype.constructor = Pentagon;
module.exports = {Pentagon};