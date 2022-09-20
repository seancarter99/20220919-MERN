// if statement

if (true) {
    // Run this code
}

// Equality operator ==
// 1. Coerce the types to be the same (implicit casting)
// 2. Compare the values

console.log(2 == '2'); // True
console.log(false == 0); // True

console.log(Number('adsfasdfsadf')) // This is a number technically for comparison purposes

// Strict Equality Operator ===
// 1. typeof 2 == typeof '2'
// 2. If that returned true, then coerce the type and compare the values
console.log(2 === '2'); // False

console.log(2.0 === 2) // true
console.log(5 !== '5'); // true


// ONLY USE == FOR CATCHING NULL OR UNDEFINED
const someVal = 0;
if (someVal == null) { // This returns true for both null and undefined
    console.log('This value is junk');
} else {
    console.log('The value is ' + someVal);
}

/**
 * 
 * 
 * Falsy: (When cast to a boolean, it's type will be false)
 * - false
 * - 0
 * - -0
 * - 0n
 * - ''
 * - undefined
 * - null
 * - NaN
 * 
 * Truthy: (Anything that isn't falsy. Will be true when cast to a boolean)
 * - true
 * - 42
 * - 'false'
 * - ' '
 * - []
 * - {}
 */

let num = 0;

if (num) {
    console.log('Your number is', num);
} else {
    console.log('This is not a number');
}

const firstName = '';
if (firstName != null) {
    console.log('Hello', firstName)
} else {
    console.log('Please provide a name');
}

console.log(Boolean(-42));
console.log(!!20); // My preferred way to cast to a boolean

console.log("Quoth the Raven, \"Nevermore.\"");
console.log('Sean\'s favorite food is ____');

// Ternary operators
function calculatePassOrFail(grade) {
    // If the condition is true, return what's after the ?. Else return what's after the :
    return grade > 70 ? 'P' : 'F';
}

function compareTo(num1, num2) {
    // For code readability, do not go more than 2 deep
    return num1 > num2 ? 1 : num1 === num2 ? 0 : -1;
}

// Logical Assignment

const person =  {
    firstName: 'Gary',
    lastName: 'Olsen',
    age: 0
}

// If person.age is truthy, return person.age. Else, return 15
// If the person object has a truthy age, use that. If it doesn't 15 is the default value.
let age = person.age || 15;

console.log(age);

person.age ||= 15; // Logical assignment

console.log(person);

console.log(0 && 'Hello World!');

// Nullish Coalescing Operator
// Returns the left if NOT null/undefined. Returns the right otherwise

console.log(undefined ?? 'Hello World') // Hello World
console.log(false ?? 'Goodbye!') // false

console.log(null ?? undefined) // undefined
console.log(undefined ?? null) // null

// If it's done loading, render the component. If not, don't render anything
isLoading && <SomeComponent />