import { useState, useRef } from "react";

/**
 * Ref vs State
 * 
 * useRef returns a reference object NOT a piece of state
 * 
 * 3 Stage Spectrum
 * 
 * 1. Local variables like let x = 10;
 *    This x variable will be reassigned back to 10 on EVERY render
 * 2. Reference objects (refs) persist their value upon re-renders, BUT do NOT trigger a rerender when changed
 * 3. State variables will persist their value upon re-render AND trigger a rerender when changed
 * 
 * Refs also allow us to reference a native DOM element directly
 * In React we do NOT use document.getElementById (you can though), because that bypasses the virtual dom
 * Instead, we use refs to gain access to those
 */
// let x = 0; // This effectively circumvents the rerender problem by removing it from the component

/**
 * Controlled vs Uncontrolled Components
 * 
 * Controlled components are when React tells an input what its value is using state
 * 
 * Uncontrolled components are when an element determines its own state (such as an input)
 * React can't control what it is, since its managing its own state
 * 
 * Uncontrolled components are the default behavior, its only the value of it to be a state variable that it
 * becomes controlled
 * 
 * Use controlled components when I want to decide when the input is allowed to change
 * Use uncontrolled if you don't care. The standard HTML behavior takes over
 */

export const RefCounter = () => {
    const [countState, setCountState] = useState(0);
    // No setter is required for ref because mutating it does not trigger a rerender
    const countRef = useRef(0); // Notice that there's no destructuring. useRef returns the entire object

    const nameRef = useRef('');

    // Changing x does NOT cause a rerender, as such, the UI also won't update
    let x = 0; // The second the state changes or the component re-renders, this will go back to 10

    return (
        <>
            <div>Current X value: {x}</div>
            <button onClick={() => console.log(`X: ${++x}`)}>Increment X!</button>
            <div>Current Count State value: {countState}</div>
            <button onClick={() => setCountState(countState + 1)}>Increment Count State!</button>
            <br/>
            <div>Current Count Ref value: {countRef.current}</div>
            <button onClick={() => console.log(`Count Ref: ${++countRef.current}`)}>Increment Count Ref!</button>

            {/* Inputs allow us to gather user input, the default is text */}
            {/* value prop comes from the native HTML element and gives us its present value */}
            <h2>Hello {nameRef.current.value}!</h2>
            <div>
                {/* By doing this, nameRef.current is assigned the ACTUAL DOM element */}
                First Name: <input ref={nameRef}/>
                
                {/* Controlled component. React tells the input what its value is. I can't change it */}
                <input onChange={() => setCountState(countState + 1)} value={countState} /> 
            </div>
           
        </>
    );
}