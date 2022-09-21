// Higher Order Functions
// A function that takes a function that takes another function as a param OR returns a function

// Array HOFs
/**
 * Big 4:
 * 
 * None of them modify the underlying array
 * All loop over the array
 * All take a callback function to apply to each element in the array
 * 
 * forEach 
 *   - Does not return anything
 *   - Takes three arguments (element, index, array)
 * map
 *   - Returns a modifed copy of the array based off what is returned
 *   - Takes three arguments (element, index, array)
 * filter
 *   - Returns a modified copy of the array without the filtered elements
 * reduce
 *   - Takes an array and "reduces" it down to a singular value. A culmination
 *   - Think of it as a snowball rolling down a hill
 * 
 * find
 */

const numbers = [-56, -1, -32];

const maxPositiveNumber = numbers.reduce(function(currMax, num) {
    return currMax >= num ? currMax : num;
}, 0); // Initial value

console.log(maxPositiveNumber);

// Constructor Functions

function Rectangle(length, width, col='Red') {
    let color = col;
    this.length = length;
    this.width = width;

    this.calcPerimeter = function() {
        return 2 * this.length + 2 * this.width;
    }

    Object.defineProperties(this, {
        'color': {
            get: function() {
                console.log('Inside getter');
                return color;
            },
            set: function(col) {
                console.log('Inside setter');
                color = col;
            }
        }
    });

    // This syntax is only avaiable in classes. It does the same as the above
    // set color() {}
}

Rectangle.prototype.calcArea = function() {
    return this.length * this.width;
}

const rectangle = new Rectangle(50, 100);
console.log(rectangle);

console.log(rectangle.calcArea()); // 5000
console.log(rectangle.calcPerimeter()); // 300

console.log(rectangle.color = 'Blue');

// Getting the pointers in line
// Square.prototype.__proto__ = Rectangle.prototype
class Square extends Rectangle {

    constructor(length) {
        this.length = length;
        this.width = length;
    }

    static hello() {
        console.log('Inside Square class!');
    }

    calcPerimeter() {
        return 2 * this.length + 2 * this.width;
    }
}

Square.prototype.calcArea = function() {
    return this.length * this.width;
}

const mySquare = new Square();

Square.hello();

// CTL + / for Windows
// CMD + / for Mac
// const Square = {
//     prototype: {
//         calcArea: function() {},
//         __proto__: Object.prototype
//     },
//     hello: function() {

//     }
// }

Object.create(null); // the object that is created is NOT a descendant of Object.
// This is essentially the head of your own inheritance tree now

console.log(mySquare);

mySquare.calcArea();
mySquare.calcPerimeter();
console.log(Square.prototype);