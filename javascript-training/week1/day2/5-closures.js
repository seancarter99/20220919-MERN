/**
 * Closure:
 * 
 * A block that contains encapsulated references to the outside "lexical environment"
 * AKA An inner function that maintains references to an outer function
 */

// In JS, functions are "first class citizens"
// This means, I can treat functions like they're objects because they are objects

// I can return functions or pass functions as arguments to other functions
// I can also have a function nested within another function

function closure(name) {

    let localVar = 10; // This variable is essentially encapsulated and only inner can refer to it
    function inner() {
        // This name variable is defined OUTSIDE of this block, but I can still read it
        console.log(name);
        console.log(localVar);
    }

    inner();
}

// console.log(new closure().localVar);

closure('John');

/**
 * Higher Order Functions:
 * 
 * It is a function that EITHER takes a function as an argument/param OR returns a function
 */

function greeter(name) {

    function greet() {
        // name = 'Henry'
        console.log(`Hello, ${name}`);
    }

    // Lack of parenethes indicates that I am returning the function and NOT it's return value
    return greet;
}

// greetHenry is the returned greet function, I just gave it a different name
const greetHenry = greeter('Henry');
const greetMary = greeter('Mary');
greeter('Joshua')(); // call greeter(), get the return value, then invoke that return value

// Each created function maintains its own RESPECTIVE closures
greetHenry();
greetMary();
greetHenry();

function timesX(x) {
    // This function is anonymous, it does not have a name
    // You may use anonymous functions when returning, assigning, or passing as a parameter

    return function(y) {
        console.log(x * y);
        return x * y;
    }
}

/**
 * The function returned looks like this
 * 
 * function times5(y) {
 *   return 5 * y;
 * }
 */

const times5 = timesX(5);

console.log(times5(3)); // 15
console.log(times5(100)); // 500
console.log(times5(2)); // 10
console.log(times5(9)); // 45


/**
 * The function returned looks like this
 * 
 * function times3(y) {
 *   return 3 * y;
 * }
 */
const times3 = timesX(3);

//                 x   y
console.log(timesX(10)(3)); // 30

const timesHello = timesX('Hello!');
console.log(timesHello(5));

const arr = [timesX(1), timesX(2), timesX(3)];

for (let fn of arr) {
    console.log('Value of function call: ' + fn(2));
}

function someFunction() {

}

someFunction.anotherFunction = function() {

}

someFunction.anotherFunction();

// Passing a function to another function
function forX(x) {
    // action SHOULD be a function
    return function(action) {
        for (let i = 0; i < x; i++) {
            action(i);
        }
    }
}

// for10 expects a function
const for10 = forX(10);

for10(function(index) {
    console.log('The present index is', index);
});

for10(times5);
