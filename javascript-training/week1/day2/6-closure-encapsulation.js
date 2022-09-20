// Counter

// Instead of making a class or a constructor function, I will just create a regular function

function counter(initialCount) {

    let count = typeof initialCount === 'number' ? initialCount : 0;

    // by default, all of the methods and variables are essentially private

    // Increment the count
    function increment() {
        count++;
    }

    // Decrement the count
    function decrement() {
        if (count - 1 < 0) {
            return;
        }
        count--;
    }
    
    // View the count
    function getCount() {
        return count;
    }

    // Maybe some logic to prevent negatives

    // Return a brand new object containing those functions
    return {
        // With no key value, it assumes the same key and value name

        // increment: increment
        increment,
        decrement,
        getCount
    }
}

const myCounter = counter();
console.log(myCounter.getCount());
myCounter.increment();

console.log(myCounter.getCount());
console.log(myCounter.count);