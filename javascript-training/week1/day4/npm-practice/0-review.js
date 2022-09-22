// Array Destructuring
const pokemon = ['Ninjask', 'Jigglypuff', 'Arceus', 'Zapdos'];

const [ninjask, jigglypuff,,zapdos] = pokemon;

console.log(zapdos);

// Generator

// Calling this function returns an iterable
function* myGen() {
    yield 1;
    yield 2;
    yield 'Finished';
}

// It contains [Symbol.iterator] on it
// It contains a next() method that returns {done: false, value: 1}
const myItr = myGen();

console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());