// In JS, data types exist, but aren't known until runtime

/**
 * Primitives:
 * - number (int, short, float, double)
 * - string (includes both individual characters and full sequence strings)
 * - boolean (true/false)
 * - undefined
 * - null
 * - BigInt (Useful for huge numbers)
 * - Symbol (Used internally with JS)
 * 
 * Non-Primitives:
 * - Objects (objects, arrays, functions)
 */

// typeof will return the type of a given variable

let x = [];
console.log(typeof x);

function addTwoNums(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        return null;
    }
    return x / y;
}

console.log(addTwoNums(1));

console.log(Number('asdfa')); // Explicit casting