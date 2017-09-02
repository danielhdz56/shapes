var {Shape} = require('./create/Shape');
var {Triangle} = require('./create/Triangle');
var {Square} = require('./create/Square');
var {Pentagon} = require('./create/Pentagon');

var triangle = Object.create(Triangle, {
    side1: { value: 1},
    side2: { value: 2},
    side3: { value: 3},
});

var square = Object.create(Square, {
    side: {value: 4}
});

var pentagon = Object.create(Pentagon, {
    side1: {value: 1},
    side2: {value: 1},
    side3: {value: 1},
    side4: {value: 1},
    side5: {value: 1}
});

var shape = Object.create(Shape);

console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());

console.log('-'.repeat(24));

// Object.create don't have access to instanceOf because they are created without a constructor
// this is so because it just creates a new object with the specifc prototype object and properties
console.log(`Triangle is a Prototype of triangle: ${Triangle.isPrototypeOf(triangle)}`);
console.log(`Shape is a Prototype of triangle: ${Shape.isPrototypeOf(triangle)}`);

console.log(`Square is a Prototype of square: ${Square.isPrototypeOf(square)}`);
console.log(`Shape is a Prototype of square: ${Shape.isPrototypeOf(square)}`);

console.log(`Pentagon is a Prototype of pentagon: ${Pentagon.isPrototypeOf(pentagon)}`);
console.log(`Shape is a Prototype of pentagon: ${Shape.isPrototypeOf(pentagon)}`);

console.log(triangle.get_sides());
console.log(square.get_sides());
console.log(pentagon.get_sides());