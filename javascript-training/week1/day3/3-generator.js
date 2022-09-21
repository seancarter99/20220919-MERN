// Generator functions were added 2015 and they allow easier way of returning iterables

/**
 * Iterable Protocol
 * 
 * 1. Must have Symbol.iterator as a function
 * 2. Must have a next function
 * 3. Next function must return an object containing done and value. Where done is a boolean
 */

class Range {
    #count = 0;
    #limit;

    constructor(limit) {
        this.#limit = limit;
    }

    // This function will be implicitly called by JavaScript when iterating
    next() {
        // This function MUST return an object {done: boolean, value: #count}
        this.#count++;
        // If the count is over the limit, we want to stop
        if (this.#count > this.#limit) {
            this.#count = 0;
            return {done: true, value: null};
        } else {
            return { done: false, value: this.#count };
        }
    }

    // I need to tell JavaScript that my object is iterable
    // You can achieve this using Symbol

    [Symbol.iterator] = function() {
        return this; // Tell JS that 'this' object is iterable
    }
}

// Iterators are "essentially" loops that I can pause execution of
const range = new Range(10);
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());

// Spread and for..of will call this .next() on their own so long as Symbol.iterator is present

const range2 = new Range(5);

console.log([...range2]);
console.log(...range2);

// Generator regular function
function* myGen() {
    // Generator acts as an abstraction over the {done: false, value: 2} syntax
    // yield 1 is essentially returning {done: false, value: 1}

    // Until .next() is called again, this function execution will be paused
    yield 1;
    console.log('About to yield 2')
    yield 2;
    console.log('Almost done, about to yield 3')
    yield 3;
    console.log('Finished! Returning done as true')

    // Once the end of the function is reached, it will return {done: true, value: null}
}

const myItr = myGen(); // myGen() returns an iterable

console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());

console.log(...myGen());
