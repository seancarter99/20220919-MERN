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