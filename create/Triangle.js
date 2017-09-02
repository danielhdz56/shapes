var {Shape} = require('./Shape');

var Triangle = Object.create(Shape, { // Has all shape properties/methods of Shape.
    type: { value: 'triangle'},
    get_sides: {
        value: function () {
            return [this.side1, this.side2, this.side3]
        }
    }
});

// <triangle>.getType() ;; doesn't find getType() checks on its Proto ->
// <triangle>.Triangle.getType() ;; doesn't find getType() on Triangle. Triangle checks its Proto -> 
// <triangle>.Triangle.Shape.getType() ;; finds getType() on Shape Proto. 
/*
    getType() {
        return this.type;
    }
*/
// <triangle>.type ;; doesn't find type property checks on its Proto ->
// <triangle>.Triangle.type ;; type: { value: 'triangle'} 
// <triangle>.getType() -> triangle

module.exports = {Triangle};