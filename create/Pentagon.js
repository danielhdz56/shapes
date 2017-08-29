var {Shape} = require('./Shape');

var Pentagon = Object.create(Shape, {
    type: { value: 'pentagon'},
    get_sides: {
        value: function () {
            return [this.side1, this.side2, this.side3, this.side4, this.side5]
        }
    }
});

module.exports = {Pentagon};