// setTimeout

// setInterval is like setTimeout, but it runs the function once every time the time elapses

// This function will be called every second
// setInterval(() => console.log(new Date()), 1000);

let count = 0;
const countKey = setInterval(() => { 
    console.log(++count);
    // If I want the interval to stop when count is 10
    if (count >= 10) {
        clearInterval(countKey); // takes an interval key
    }
}, 1000);

setTimeout(() => {
    setInterval(() => console.log(new Date()), 1000); // These can be nested
}, 2000);
