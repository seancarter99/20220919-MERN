// Components in React MUST start with an uppercase character and SHOULD be pascal case

// Function component. The return from the function is what will be rendered
export const SomeComponent = () => {
    return (
    <>
        <div>Hello World!</div>
        <p>Some text</p>
        <div>Goodbye!</div>
    </>
    );
}

// Regular export and to obtain it, you must destructure by name
// "Named export"
export const x = 2;
// module.exports = { x };

// export syntax
// default exports allow us to call it whatever we want in the other file. Does not use destructure syntax
// There may ONLY BE ONE default export per file
export default SomeComponent;

// module.exports = SomeComponent;