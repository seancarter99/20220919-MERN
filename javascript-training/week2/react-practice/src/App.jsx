import ClassCounter from "./components/Counter/ClassCounter";

// This file, App, is in charge of rendering the App itself

export const App = () => {
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
            <ClassCounter />
        </>
    );
}