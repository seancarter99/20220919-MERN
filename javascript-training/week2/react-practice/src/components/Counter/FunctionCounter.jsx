import { useState, useEffect } from 'react';

/**
 * Class are "classical" components because they are old school/legacy
 * 
 * Function are "functional" components because that's how we do our job in 2022
 */

// You can use the function keyword OR use an arrow function
// Does NOT matter because we won't use "this"

let x = {}; // This variable is JavaScript's territory

export const FunctionCounter = () => {

    // React hooks must be used top level of the component (not inside an if block or any other block)
    // React hooks are adding those lifecycle hooks from class components to our function components

    // useState is a hook that allows us to add state to a function component (did not exist before hooks)
    // useState returns an array where the 0 index is the state itself and the 1 index is the setter for it
    const [count, setCount] = useState(0); // The param to useState is the initial state
    const [otherCount, setOtherCount] = useState(0);

    // The setter can also take a callback function where the param is the old state and what is retunred is the new state
    // This approach is immune to dirty reads as compared to manual setting that come with asynchronousicity
    // React checks if you pass it a fucntion to setCount. If you do, it will call that function with the present state
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count - 1);

    // useEffect allows us to run side-effects on our component at a various point in its lifecycle
    // React doesn't know about things external to it such as APIs or conencting via web sockets
    // useEffect is a synchronization tool between React and whatever third party entity you're talking to

    // useEffect is effectively the three lifecycle hooks from class components wrapped into one
    useEffect(() => {
        // This useEffect will run EVERYTIME the component renders
        console.log('This useEffect runs everytime a render occurs');
    }); // The syntax is very similar to 
    
    // This useEffect with an empty array is effectively "componentDidMount"
    useEffect(() => {
        console.log('This useEffect only gets called on component mount');
    }, []); // This array is a "dependency array". Whenever its contents change, the useEffect triggers

    // "componentDidUpdate" kinda
    useEffect(() => {
        console.log('This useEffect is running. Count is: ' + count);
        // Please DO NOT setCount in here
        // setCount(0);
    }, [count]); // This useEffect is called on mount AND whenever count changes

    // "componentWillUnmount" kinda
    // if you return a function from a useEffect, React will run that function on unmount
    useEffect(() => {
        let key = setInterval(() => console.log(Date.now()), 1000);
        return () => {
            clearInterval(key);
        }
    }, []);


    // Whatever returned from here is the JSX that will be rendered

    // Classes are isolated by virtue of being a class
    // But our function components are also isolated due to closures

    let y = {}; // This variable is React's territory

    return (
        <>
            {/* These comments ARE NOT visible in the browser */}
            <h2>Hello Function Component!</h2>
            {/* No this anywhere in this file */}
            <h3>Count: {count}</h3>
            <button onClick={() => setOtherCount(otherCount + 1)}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => { increment(); increment(); }}>+2</button>
        </>
    );
}