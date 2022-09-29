import { useState } from "react";
import { ClassCounter, FunctionCounter, RefCounter } from "./components/Counter"; // If you don't specify a file, it's going to assume i mean index.js
import { Article } from "./components/Article";
// import ClassCounter from "./components/Counter/ClassCounter.jsx";
// import { FunctionCounter } from "./components/Counter/FunctionCounter";

// This file, App, is in charge of rendering the App itself

export const App = () => {
    const [shouldRender, toggleShouldRender] = useState(false);

    return (
        // Fragments allow us to return multiple JSX elements
        /**
         * Without fragments
         * 
         * <div></div>
         * <div></div>
         * 
         * would be a return looking like
         * 
         * React.createElement("div")
         * React.createElement("div")
         * This is two things returned which won't work
         * 
         * <span>
         * <div></div>
         * <div></div>
         * <span/>
         * 
         * This would return
         * 
         * React.createFragment(React.createElement("div", null, React))
         */
        <>
            <button onClick={() => toggleShouldRender(!shouldRender)}>Toggle Counters</button>
            {/* React does not display booleans to the page */}
            {/* 
                Conditional rendering
                Using booleans as a toggle for a component
            */}
            {shouldRender && <><ClassCounter /><FunctionCounter /></> }
            <RefCounter />
            <Article 
                title="Sean's Guide to Baking Cookies" 
                author="Sean Carter" 
                publishDate="09/29/2022"
            >
                {/* This is the children property of props */}
                Sean's tips for baking cookies is to follow the instruction on the back.
            </Article>
            <Article 
                title="The Demonstration of Superior Judgement" 
                author="DSII"
                publishDate="01/23/2020"
            >
                F stands for Flash.
            </Article>
            {/* <ClassCounter /> */}
            
            {/* <FunctionCounter /> */}
        </>
    );
}