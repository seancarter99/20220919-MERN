function myFunction() {
    console.log('myFunction!');
}

myFunction();

function greet(firstName, lastName) {
    // Template literal `
    console.log(`Hello, ${firstName} ${lastName}`);
    console.log('Hello,', firstName, lastName); // Same as Python 

    // String concatenation
    console.log('Hello, ' + firstName + ' ' + lastName);
}

// greet('Sean', 'Carter');

// Method overloading is not a thing
greet('Sean'); // lastName gets assigned undefined

greet();
greet(undefined, undefined); // The equivalent of the line above greet()

// Anything beyond the first two are discarded
greet('a', 'b', 'c');

// Parameters will receive thier default values when undefined is passed in it's place
function defaultParams(a='a', b='b', c=a) {
    console.log(a, b, c);
}

defaultParams(1, 2, 3);
defaultParams('x', 'y');
defaultParams(); // a b a

defaultParams('a', undefined, 'z'); // a b z
defaultParams('a', 'z'); // a z a

// Null works different than undefined
// Default values do NOT trigger
defaultParams(null, null, null);