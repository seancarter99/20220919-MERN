// While loop
// Checks the condition, and if true, then runs block

let i = 0;

while(i < 10) {
    console.log(`Current Count: ${i}`);
    i++;
}

// For loop
for(let i = 0; i < 10; i++) {
    console.log(`Current Count: ${i}`);
}

// CTL + C to stop the program

// Do-While loop
// Does the code, then checks the condition, if true, repeat
do {
    console.log('This runs only once');
} while (false);

while (false) {
    console.log(`Current Count: ${i}`); // This will never run
}

// For..In loop
// Iterates over every enumerable property

const person = {
    firstName: 'Sean',
    lastName: 'Carter',
    favoriteColor: 'blue',
    // key: 'The Key'
}

Object.defineProperty(person, 'firstName', {enumerable: false});

for (let key in person) {
    console.log(person.key) // Doesn't work as expected. prints The Key 3 times
    console.log(person[key]); // Use bracket notation to dynamically change what we're accessing
}

// For..of loop
// Iterates over iterable properties
// for (char c : word)

const nums = [6, 1, 32, 9];
for (let num of nums) {
    console.log(num);
}

for (let index in nums) {
    console.log(index); // the enumerable properties of an array are its indices
}