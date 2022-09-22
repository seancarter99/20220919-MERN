// Before Promises we used callbacks exclusively
// Callbacks were fine, but didn't allow us to cleanly handle success/error cases

/**
 * Promises represent the eventual success or failure of an asynchronous operation
 * 
 * Promise States:
 * 
 * - Pending (The request is not finished yet. Can't be processed)
 * - Fulfilled (The request is finished and it was successful)
 * - Rejected (The request is finished and it failed)
 * - Settled (The request is finished has been fully processed-- for better or worse)
 */

const promise = new Promise((resolve, reject) => {
    reject('Promise resolved!');
});

console.log(promise);

// .then() handles the fulfilled Promise state
// .catch() // handles the rejected Promise state

promise
    .then(data => console.log('Success!'))
    .catch(err => console.error('Failure!'));

const greet = (name, msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'Brad') reject('Get out of here Brad')
            resolve(`Hello, ${name}. ${msg}`);
        }, 3000);
    })   
}

// To use await, you must be in an async function
greet('Doug', 'How\'re you?')
.then(taco => console.log(taco))
.catch(err => console.error(err));

const invokeGreet = async () => {
    try {
        const taco = await greet('Doug', 'How\'re you?');
        console.log(taco);
    } catch (err) {
        console.error(err);
    } 
}

// Chaining Promises

Promise.resolve(1) // Returns a Promise that is fulfilled and it's payload (the data) is 1
.then(num => {console.log(num); return num+1}) // 1
.then(num => console.log(num)) // 2
.then(num => { console.log(num); return 5; }) // undefined
.catch(num => console.log(num))
.then(num => console.log(num + 5)); // 10


// If you return in a .then or .catch. It will return a resolved Promise
// If you throw in a .then or .catch. It will return a rejected Promise
Promise.reject('Hello')
.then(msg => console.log(msg))
.catch(err => { console.error(err); return 'Goodbye' }) // 'Hello'
.then(data => { console.log(data); throw data }) // 'Goodbye'
.catch(err => console.error(err)) // 'Goodbye'
.finally(data => console.log(data)); // Finally always runs

console.log('The return of the console.log is: ' + console.log('Hello World!'));

const timedPromise = (time, name) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (name === 'Fast') {
                rej(`${name} Promise rejected!`);
            }
            res(`${name} Promise resolved!`);
        }, time);
    });
}

const fastPromise = timedPromise(2000, 'Fast');
const mediumPromise = timedPromise(5000, 'Medium');
const slowPromise = timedPromise(8000, 'Slow');

// I want all Promises to be resolved for me to proceed. AKA none can fail

// If any one Promise fails, they all fail
Promise.any([fastPromise, mediumPromise, slowPromise])
.then(data => console.log(data))
.catch(err => console.error(err));

// Promise.allSettled works the same in that waits for all Promises, but doesn't care if they pass or fail

// Promise.race works in that the first Promise to get resolved OR rejected is what we go with

// Promise.any works similar to Promise.race, but it only goes with the first resolved Promise
