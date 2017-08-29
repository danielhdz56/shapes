var {Shape} = require('./Shape');

var Square = Object.create(Shape, {
    type: { value: 'square'},
    get_sides: {
        value: function () {
            return [this.side]
        }
    }
});

module.exports = {Square};