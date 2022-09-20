// HOF - Higher Order Functions

// Callback Function
// A function passed to as an argument to another function to be called at a later time

/**
 * Array HOFs:
 * 
 * forEach (performs the callback function on each element in the array)
 * map (same as forEach, but what is returned gets added to a new array. That array is returned by map)
 * filter (Perform some logic on each element, if the value returned is true, it is added to the new array)
 * reduce
 */

// Functional Programming
// Functional Programming believes all functions should be pure (means no side-effects or mutations)

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']

planets.forEach(function(planet, index, array) {
    // console.log(array);
    console.log(`Planet at index ${index}: ${planet}`);
});

// Changing the planet in a forEach does NOT alter the underlying array
planets.forEach(function(planet) {
    planet = 'Apple';
    return planet.toUpperCase(); // returns in a forEach are ignored
});

console.log(planets);

// Map functions the same as forEach, but it returns a new array
const upperCasedPlanets = planets.map(function(planet) {
    return planet.toUpperCase();
});

console.log(upperCasedPlanets);
console.log(planets); // This array remains untouched

const planetsForEach = planets.forEach; // Not recommended

// Filter filters out elements from an array
// It does this by returning a new array missing the filtered out elements. The original array is untouched

const filterLetter = 'M';

// Filter out the planets that don't start with the letter M
const planetsBeginningWithM = planets.filter(function(planet, action) {
    // Anytime true is returned, the value is "kept"
    // False values are filtered out
    return planet.startsWith('M');
    // return action(planet); // This would not work since action is the index technically
});

console.log(planetsBeginningWithM);

// Reduce will take a callback and wrap up or "accumulate" all of the values into one singular value

const nums = [5, 2, 90, 3, 12];

const sum = nums.reduce(function(currSum, num) {
    return currSum + num; // What is returned will become the currSum on the next iteration of reduce
});

console.log(sum);

const max = nums.reduce(function(currMax, num) {
    return currMax > num ? currMax : num;
});

console.log(max);


// Chaining these together
// 1 caveat: You cannot (usually) chain off of reduce (doesn't return an array) or forEach (returns undefined)

/**
 * 1. Filter out any element > 10
 * 2. Times all remaining elements by 2
 * 3. Sum up what's left
 */

// filter, map, reduce
// reduce, map, filter

// [5, 2, 90, 3, 12] -> [5, 2, 3] -> [10, 4, 6] -> 20

const sumOfWhatsLeft = nums.filter(function(num) {
    return num <= 10;
}).map(function(num) {
    return num * 2;
}).reduce(function(currTotal, num) {
    return currTotal + num;
});

console.log(sumOfWhatsLeft);