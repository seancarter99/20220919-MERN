/**
 * Redux
 * 
 * Redux is a popular state management solution in React (not exclusive to React)
 * It aims to reduce complexity in your app as it grows
 * Redux acts as a global state store
 * 
 * What data should I store in Redux?
 * - Avoid storing everything in Redux
 * - Data local a component should NOT be stored in redux
 * - Network data (from the backend) or any piece of state my entire app cares about (theme)
 * 
 * Context vs Redux:
 * - Redux is more heavyweight than context since it's state management solution
 * - Data that I'm reading from in multiple places, but seldom update should be context
 * - Data that frequently requires complex mutations or functions ran should be Redux
 * 
 * Flux Pattern:
 * 
 * 1. An event is triggered on the UI (user interaction)
 * 2. This event is dispatched as an "action" containing a type and a payload (deposit $10)
 * 3. Reducers receive the action and based off the the action "type", send it to the correct reducer function
 * 4. Reducer function then updates the state stored in the redux store
 * 5. Any UI element reading that state from the store, re-renders
 * 6. Repeat.
 * 
 * Redux Toolkit:
 * 
 * Redux Toolkit is new and it aims to abstract away a lot of the boiler plate from old Redux
 * Redux Toolkit is a one stop shop for anything redux
 * Old redux encouraged defining actions and reducers separately
 *   Redux Toolkit uses "slices" which bundle actions and reducers together
 */

import { useRef } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../store';
import { setUsername } from '../reducers/userSlice';

export const ReduxExample = () => {

    return (
        // Provider acts as a context
        // This allow us to mount the global store around a section of our app
        // Typically you'd store it at the top level (index.js right <Provider><App /></Provider>)
        // Store contains the reducers and also the state
        <Provider store={store}>
            <UsernameDisplay />
            <UsernameForm />
        </Provider>
    );
}

const UsernameDisplay = () => {
     // This returns the state associated with the user reducer
     // Any change to the user object will cause my component to rerender
     const user = useSelector(store => store.bank);
     console.log(user);
    
     return (
        <h1>Current Username: {user.username}</h1>
    );
}

const UsernameForm = () => {

    const usernameRef = useRef();
    const dispatch = useDispatch(); // Returns a dispatch object that we can use to talk to the store

    const handleSubmit = e => {
        e.preventDefault(); // So that page doesn't refresh
        // I want to take the data submitted, and dispatch it as an action to update the username
        dispatch(setUsername(usernameRef.current.value));
        usernameRef.current.value = null; // Clear the input field right after
    }

    return (
        <form onSubmit={handleSubmit}>
            Username: <input ref={usernameRef} />
            <div><button>Submit Username</button></div>
        </form>
    )
}