// The JSX extension works the same as js
// The jsx extension carries more semantic meaning

/**
 * Class components are the old school way of defining a component in React.
 * 
 * YOU SHOULD NOT WRITE NEW CODE USING CLASS COMPONENTS. USE FUNCTION COMPONENTS
 * 
 * Why did we start with class components?
 * Function components have always existed, as have class components, but class components used to be
 *  the only ones that could handle state
 * 
 * Function used to be "dumb" or UI components ONLY. Any logic or state would be a job for a class component
 * 
 * In React 16.8 hooks were added which brought state and the other features of class components to function components
 * This effectively killed class components
 * 
 * React themselves still support class components, but a lot of modern libraries for React do not
 */

import React from 'react';

// For a class to be seen as a React component
export class ClassCounter extends React.Component {
    
    #dateIntervalKey;

    constructor() {
        super();
        // I am going to define the initial state for my React component

        this.state = {
            count: 0
        };

        // We need to bind the definition of this, to the functions
        // bind returns a new function which functions the same as the old, but the context of 'this' has changed
        // to refer to what is passed as the parameter to bind
        this.increment = this.increment.bind(this); // This allows these functions to read 'this' in it
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        // setState();
        // setState comes from React and it's our way of changing state
        /**
         * In React, state is immutable, we can only change it using their setters.
         * 
         * The reason for this, is because that setState is also going to trigger the re-render process
         * and talk to the virtual DOM
         */
        // this.state.count++; // This is a no-no. It will not re-render the page

        // Update state to be a new object with count set to the old count + 1
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    /**
     * Unlike function components where what is returned is what is displayed
     * 
     * Class components have a render method that will be called
     */
    render() {
        return (
            <>
            {/* Only the HTML elements will get rendered to the page. Fragments or components do not */}
                <h2>Hello Class Component!</h2>
                <h3>Count: {this.state.count}</h3>
                {/* {} is an expression in JSX. It's where we can put JavaScript */}
                <button onClick={this.increment}>+</button>
                <button onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.increment(50)}>+50</button>
            </>
        );
    }

    /**
     * Class components have designated lifecycle methods in them
     * 
     * A lifecycle method is a function that React will automatically call on your behalf at various stages
     * of a component's lifecycle.
     */

    /**
     * This functions runs ONCE once the component has first been mounted to the DOM (on the page)
     */
    componentDidMount() {
        // This was a good place to fetch data
        console.log('Component is born!');
        // this.#dateIntervalKey = setInterval(() => {
        //     console.log(new Date());
        // }, 1000); // If not cleaned up, this interval will continue to run
    }

    /**
     * This function is called JUST BEFORE a component will be unmounted from the DOM
     */
    componentWillUnmount() {
        // This is where all cleanup should go

        // If I was doing web sockets, sever connection here
        // If I established any intervals or event listeners, cancel them here
        console.log('Component is unborn!');
        clearInterval(this.#dateIntervalKey);
    }

    /**
     * This function is called whenever the component updates
     * 
     * prevProps is the old copy of the props passed to it
     * prevState is the old copy of the state
     * 
     * You can run logic some logic whenever the state has changed
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('Old count: ' + prevState.count);
        console.log(this.state.count);
        if (prevState.count !== this.state.count) {
            // Run some logic only if count changed
            // You'd have to do this for every single piece of state that you want to evaluate
        }
    }
}

export default ClassCounter;