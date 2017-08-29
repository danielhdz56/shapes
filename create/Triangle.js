var {Shape} = require('./Shape');

var Triangle = Object.create(Shape, {
    type: { value: 'triangle'},
    get_sides: {
        value: function () {
            return [this.side1, this.side2, this.side3]
        }
    }
});

module.exports = {Triangle};