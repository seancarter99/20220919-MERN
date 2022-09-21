// JS is ever evolving due to the ECMAScript committee

// Every year meet together to discuss how to improve JS.
// A bunch of proposals are made, and those that are accepted, get inducted the actual language itself


/**
 * Newer operators
 * 
 * ?? - Nullish Coalescing
 * ?. - Optional Chaining
 * ... - Spread/Rest
 * {}/[] - Object/Array destructuring
 * () => {} - Arrow Function
 * function*() - Generator functions
 */

// ES5 2008 was the longtime language
// Newer syntax is often called ES6+

// Spread operator
// Spread fans out iterables OR object properties

const obj = {
    color: 'Blue',
    food: 'Pizza',
    location: 'NYC'
}

// Object.defineProperty(obj, 'food', {enumerable: false})

// I just want a clone of the object, not the exact object
const newObj = {};

for (let prop in obj) {
    newObj[prop] = obj[prop];
}

newObj.newProp = 'newProp';

console.log(newObj);

// More concise syntax for this using the spread operator

// Fanning out all of the props of object and adding them to the new obj2
// Only copies the enumerable properties

// Rule of thumb, if it's a "default value". Put it to the left of the spread object
// If it's a new value you always want added, put it to the right of the spread object
const obj2 = {...obj, location: 'Chicago'};

console.log(obj2);

// Strings are iterable
const word = 'Hello World!';

// Take the word, and turn it into a char array
const charArray = [...word];

console.log(charArray);

// Adding an item to the end of an array WITHOUT mutating it
const charArrayWithExclamation = [...charArray.splice(0, 5), '!'];

console.log(charArrayWithExclamation);

// Rest shares the same operator as spread ...
// Rest does the opposite of spread by taking many things and condensing them into one value

//                   top     second   third    all the rest
function printMovies(movie1, movie2, movie3, ...otherMovies) {
    console.log(`The number one movie is ${movie1}`);
    console.log(`The number two movie is ${movie2}`);
    console.log(`The number three movie is ${movie3}`);
    console.log('And as for the rest of the movies: ');
    console.log(otherMovies);
}

printMovies('Avengers: End Game', 'Top Gun', 'Interstellar', 'Nope', 'Life of Pi');


// Optional Chaining

const person = {
    // fullName: {
    //     firstName: 'Greg', 
    //     lastName: 'Smith'
    // },
    age: 25
}

// This potentially could throw an error if fullName is undefined or null
// This is because undefined.someProp will throw an Error
// console.log(person.fullName.firstName);

// Attempt to grab the firstName property, but, if it's null or undefined, return undefined instead
console.log(person.fullName?.firstName); // This is preferred

// Optional Chaining allows me to forego null checks

// if (person.fullName == null) {
//     return undefined
// } else {
//     console.log(person.fullName.firstName)
// }