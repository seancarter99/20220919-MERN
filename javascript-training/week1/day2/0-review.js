// Booleans

// ||
// First evaluates the left side, if it's true, returns the left side. If it's false, returns the right

console.log([] || 'Hello World'); // []
console.log('' || 'Goodbye'); // 'Goodbye'
console.log(0 || false); // false

// &&
// First evaluates the left side, if it's false, returns the left side. If it's true, returns the right

console.log({} && false); // false
console.log(0 && ''); // 0
console.log('false' && 'true'); // 'true'

// ??
// First evaluates the left side, if it's null or undefined, returns the right side. Else, returns the left

console.log(0 ?? 'Hello World'); // 0
console.log(undefined ?? null); // null
console.log({firstName: null} ?? []); // {firstName: null}

if (undefined ?? 1) {
    console.log('True!')
} else {
    console.log('False!')
}

function calculateTwoNums(x, y) {
    x = x ?? 1;
    x = y ?? 2;
    return x + y;
}

const num = process.env.SOME_SECRET_NUM || 100; // This one does not allow 0
let anotherNum = process.env.SOME_SECRET_NUM ?? 100;

console.log(calculateTwoNums(null, null));

/**
 * MERN
 * 
 * Tech Stack. Full-Stack solution
 * 
 * M - MongoDB (NoSQL Document Database)
 * E - Express.js (Web Server)
 * R - React.js (UI Component Library)
 * N - Node.js (Execution Environment allowing for JavaScript out of the browser)
 */


// for..in
// Enumerables

// Looping over keys of an object that is enumerable
// By default, properties of an object are enumerable, they must be explicitly set to false

const obj = {
    fullName: {
        firstName: 'John',
        lastName: 'Doe',
        value: 'This is the value'
    },
    age: 30,
    favColor: 'Red',
    favFood: 'Grilled Cheese',
    friends: ['Mark', 'Sally', 'Doug']
}

for (let thing in obj) {
    console.log(thing); // Prints the key
    // Print the value
    obj.thing // Look for a property on the object called thing
    console.log(obj[thing].value); // Bracket notation
}

console.log(obj['Red'])


// for..of
// Iterables

// Objects are NOT iterable in JS
// for (let prop of obj) {

// }

const arr = [1, 2, 3, 4, 5];

for (let num of arr) {
    console.log(num);
}