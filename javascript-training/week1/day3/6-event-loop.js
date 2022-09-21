console.log('Log 1');

// setTimeout takes a callback function and a time.
// After the given time has elapsed, it will call the callback function
setTimeout(() => console.log('Log 2'), 0);

Promise.resolve().then(() => console.log('Log 2.5')); // Promises get priority access

console.log('Log 3');

setTimeout(() => console.log('Log 4'), 5000);

// 1 -> 2 -> 3
// 1 -> 3 -> 2 WINNER
// 2 -> 1 -> 3

// while (true) {} // 1 -> 3