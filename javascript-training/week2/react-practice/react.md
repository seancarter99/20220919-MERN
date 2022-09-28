# React

- React is a JavaScript UI library (framework)
- Component based system
- Utilizes the Virtual DOM

## Virtual DOM

- React's core philosophy is that the User Interface (UI) should be a function of the appliation's state
  - UI = f(state)
- Whenever the "state" changes in React, React will automatically update the page on your behalf
- The virtual DOM is a JavaScript, in-memory representation of the actual DOM
  - As such, it is faster to interact with
- React will read the virtual DOM, and if anything has changed when state changes, it will redraw the changes to the actual DOM
  - The virtual DOM is React's way of interfacing with the native DOM
- React will intelligently only re-render/redraw elements that have changed
  - When a change is made, it looks at the old copy of the tree and the new copy of the tree, and only makes changes where things have changed

## JSX

- JavaScript and XML
- It allows us to type "HTML" in our JavaScript. Technically, it's not HTML though, it's JSX
- <div></div> -> React.createElement("div");
  - React.createElement will call document.createElement for us. It's another abstraction
- JSX is converted to JS using a tool called Babel
  - Newer JS is "transpiled" back to an older version of JavaScript
  - We can write the modern, bleeding-edge JS and still have it be supported by browsers that only support 2008 JS (Internet Explorer)
- Browsers CANNOT understand JSX, but they can understand React.createElement()

## Webpack

- create-react-app (CRA) generates and manages a webpack config for you
- This is a build tool responsible for injecting values into the environment, enter production mode, hot module reloading (HMR), bundling and minifying your JS for optimal build (Puts it through babel, removes unused code, comments, and also "optimizes your code")
  - The code function the exact same, but it will be vastly smaller in terms of memory

## Components

- Allows us to organize our logic into bits of reusable code that each handle their own internal state