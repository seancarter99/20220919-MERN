// In JavaScript Errors are Exceptions

/**
 * ReferenceError (Referencing something you can't. AKA Temporal Dead Zone)
 * RangeError (A value exceeds or does not meet some given range requirement)
 * TypeError (You try and access some property that doesn't belong to it. AKA toUpperCase on a number)
 * SyntaxError (Your program will not compile. Invalid variable name)
 */


// Custom Errors
class MyError extends Error {

    name = 'MyError';

    constructor(message) {
        // super calls Error's constructor and passes message
        // It also changes the context of 'this' in the Error constructor to refer to the Error object

        // In a constructor function this is super's equivalent:
        // Error.call(this, message);
        super(message);
    }

    doSomething() {
        console.log('Doing something!');
    }
}

class AnotherError extends MyError {
    doSomething() {
        // super.doSomething();
        console.log('Doing something else!');
    }
}

const anotherError = new AnotherError();
anotherError.__proto__.__proto__.doSomething();

console.log(MyError.name);

// throw new MyError('Something went wrong!');

try {
    throw new MyError('Throwing my error');
} catch (err) {
    // Since JS is dynamically typed (runtime types), we cannot have multiple catches
    switch (err.name) {
        case 'TypeError':
            console.log('Handling TypeError');
            console.error(err.message);
            break;
        case 'MyError':
            console.log('Handling MyError');
            console.error(err.message); // console.error displays to std error
            // Java equivalent is System.err.println();
            break;
        default:
            console.log('Handling any other type of error');
    }

}

// console.log(new TypeError().name);