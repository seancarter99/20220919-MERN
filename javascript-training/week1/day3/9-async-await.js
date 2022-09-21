/**
 * Promises solved a lot of issues with asynchronous code compared to callbacks,
 * but it wasn't perfect
 * 
 * ES7 async/await were introduced as a cleaner way to work with Promises
 * 
 * It allows us to write our asynchronous as though it were synchronous
 */

// Adding async to a function makes it "asynchronous"
// Anything returned from it will be a fulfilled Promise
// Anything thrown from it will be a rejected Promise
const myAsyncFunction = async () => {
    return 'Hello Async';
}

// console.log(myAsyncFunction());

// You may only await in an async function
// console.log(await myAsyncFunction());

myAsyncFunction().then(data => console.log(data));

// IIFE // Immediately Invoked Function Execution AKA a function that calls itself

(() => {console.log('Hello!')})();

// AIIFE
(async () => {
    // await "awaits" on the Promise to resolve. Once it has, it will resume by unpacking the payload
    const data = await myAsyncFunction();
    console.log(data);
})();

// Two Async functions call each other

const cleanDishes = async () => {
    // Forces it to pause here
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve('The dishes are clean!'), 3000);
    });
}

const walkDog = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => resolve('The dog has been walked!'), 4000);
    });
}

const mowLawn = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => resolve('The lawn has been mown!'), 7000);
    });
}

// In order to go to the movies, I must first clean the dishes and walk the dog
const goToMovies = async () => {
    // If any promise is rejected. The catch block will be executed
    try { 
        // I need to await for these tasks to be finished
        // Each await is a .then
        const cleanConfirmation = await cleanDishes(); // First clean the dishes
        console.log(cleanConfirmation);
        const walkDogPromise = walkDog(); // Choosing not to await it gives you the entire promise
        const mowLawnPromise = mowLawn();

        // Walk the dog AND mow the lawn at the same time
        // I want to proceed ONLY if both promises are fulfilled
        await Promise.all([walkDogPromise, mowLawnPromise]);
        
        
        // Once both are done, I can go to the movies
        console.log('Finished! I\'m headed to the movies!');
    } catch (err) { // this is a .catch
        console.error(err);
    } finally { // .finally

    }
    
}

goToMovies();