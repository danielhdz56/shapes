var {Shape} = require('./new/Shape');
var {Triangle} = require('./new/Triangle');
var {Square} = require('./new/Square');
var {Pentagon} = require('./new/Pentagon');

var triangle = new Triangle(1, 2, 3);
var square = new Square(4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();

console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());
console.log(shape);

console.log('-'.repeat(24));

console.log(`triangle is an instance of Triangle: ${triangle instanceof Triangle}`);
console.log(`triangle is an instance of Shape: ${triangle instanceof Shape}`);

console.log(`square is an instance of Square: ${square instanceof Square}`);
console.log(`square is an instance of Shape: ${square instanceof Shape}`);

console.log(`pentagon is an instance of Pentagon: ${pentagon instanceof Pentagon}`);
console.log(`pentagon is an instance of Shape: ${pentagon instanceof Shape}`);

console.log(`shape is an instance of Shape: ${shape instanceof Shape}`);
