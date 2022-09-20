// int x = 10;
var x = 10; // Global scope

// Var has two scopes
// 1. Function scoped
// 2. Global Scope

function changeX() {
    var x = 'a'; // A separate variable
    console.log(x);
}

changeX();
console.log(x);

function someFunction() {
    // Variable Hoisting
    // All variables are hoisted to the top of their scope

    // var z; // This defaults to undefined
    console.log(z);
    // console.log(a);

    // Let is still hoisted, but you cannot use it before initialization
    // This is known as the "temporal dead zone"
    
    if (false) {
        var z = 'Gary'; // This gets hoisted all the way to the top of the function
        let a = 'a';
    }
}

someFunction();

var x = 20; // It will let me redeclare a variable
console.log(x);

// let
// let behaves the same as var except it is block scoped and prevents declaration

// const
// The exact same as let, but makes the variable constant. Meaning you cannot reassign the value

const firstName = 'Joe'; // This is fine
firstName = 'Seth'; // This will break

console.log(firstName);


// Both let and const are block scoped and are hoisted just the same

// Does not work
// var y = 5;
// let y = 5;