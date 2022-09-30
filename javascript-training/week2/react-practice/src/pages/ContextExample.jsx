/**
 * Context
 * 
 * Context is a section of the React DOM or tree that any component can read a value from
 * 
 * Traditionally we just pass props to other components as a way to pass data, but in extreme
 * examples can be very messy (prop drilling)
 * Props can normally be passed downstream, not upstream (parent -> child)
 * 
 * 
 * Any component within the "context provider" (within the context) can read the data inside of it
 * without actually passing it as props
 * 
 * Any component using a piece of data from context will re-render when it changes
 * If a component exists in the context but DOES NOT USE the data, it will not rerender (unless its parent rerender)
 */

import { createContext, useContext, useState } from "react";

const themes = {
    light: {
        backgroundColor: '#EEEEEE',
        color: 'black'
    }, dark: {
        backgroundColor: '#212121',
        color: 'white'
    }
};

const ThemeContext = createContext(themes.light);

export const ContextExample = () => {
    const [theme, setTheme] = useState(themes.light);
    
    return (
        // Provider because this is what anchors our context to the tree
        <ThemeContext.Provider value={theme}>
            {/* Everything in here and below can read the theme context */}
            {/* You can do so using useContext hook OR ThemeContext.Consumer (OLD WAY) */}
            <ThemeToggle setTheme={setTheme} />
            <Container>
                Container 1!
            </Container>
            <br/>
            <Container>
                Container 2!
            </Container>
            <Box></Box>
            <Box></Box>
        </ThemeContext.Provider>
    );
}

const ThemeToggle = ({setTheme}) => {
    const handleToggle = () => {
        // When it's light mode, switch to dark
        // When it's dark mode, switch to light
        setTheme(theme => theme === themes.light ? themes.dark : themes.light);
    }

    return (
        <button onClick={handleToggle}>Toggle Theme</button>
    );
}

const Container = ({children}) => {
    // Container will read from the context and get the theme to style its contents
    const theme = useContext(ThemeContext);

    return (
        // Pass the theme object to the div
        // When the context changes in my app, this div will automatically restyle
        <div style={theme}>
            {children}
        </div>
    );
}

const Box = () => {
    const theme = useContext(ThemeContext);

    return <div style={{...theme, height: '100px', width: '100px', margin: '10px'}}></div>
}