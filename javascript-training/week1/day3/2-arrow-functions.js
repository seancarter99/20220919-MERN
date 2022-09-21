// Arrow Functions
// A lightweight, anonymous function

// () => {}

const numbers = [1, 2, 3];

numbers.forEach(function(number) {
    console.log(number);
});

console.log(numbers.map(number => 2));

/**
 * Arrow Function Rules:
 * 
 * 1. If there are no parameters in the function. You must start with () => 
 * 2. If there is EXACTLY ONE parameter, the () are optional
 * 3. If there are 2+ parameters, you MUST have the (num1, num2) => 
 * 4. If the function is one line long, you may omit the {} for the function body
 *    - It will implicitly return what that one line is
 *    - YOU MAY NOT use the return keyword here
 * 5. If you do use {} and want to return, you MUST use return keyword
 */

// name => name.toUpperCase(); // T
// x, y => return x + y; // F
// (x, y) => x + y; // T
// (x, y) => { return x + y }; // T
// obj => {return obj};
// (firstName) => {firstName: firstName};
// => 1;

// Giving an arrow function a name
function myFunction() {}

// People do it this way
const myArrowFunction = () => {}

const myRegularFunction = function() {}

const obj = {
    firstName: 'Sean',
    hello: function() {console.log(this.firstName)}, // 'this' refers to the object
    hola: () => console.log(this.firstName) // 'this' refers to the surrounding function's version of this
}

obj.hello();
obj.hola();