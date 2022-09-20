/**
 * Prototypes are JavaScript's way of implementing inheritance
 * Prototypal Inheritance
 * 
 * 2 Types of prototypes:
 * 
 * 1. Function Prototype
 *    - An object attached to function/class that you use to make an object
 * 2. Object Prototype
 *    - __proto__
 *    - It is a pointer to the function prototype it was created with
 */

// Define a function here
// Constructor Function
function IceCream(flavor, price) {
    // This function behaves like a constructor

    // this refers to the newly created iceCream object
    this.flavor = flavor;
    this.price = price;
}

IceCream.prototype.firstName = 'Ice';

/**
 * new keyword:
 * 
 * 1. Creates a new JavaScript object {}
 * 2. Add a __proto__ property to it that points to the IceCream function's prototype
 *    iceCream.__proto__ = IceCream.prototype
 * 3. Binds all references of 'this' to the newly created object
 * 4. Returns this
 */
const iceCream = new IceCream('Chocolate', 5.00);

console.log(iceCream);

console.log(IceCream.prototype);
console.log(iceCream.__proto__); // This __proto__ points to the IceCream prototype

const myObj = {}; // By default, every object extends Object. __proto__ points to Object
console.log(myObj.__proto__);

console.log(Object.prototype.__proto__); // Null === End of the Line

// Prototype Chaining
console.log('IceCream as a string: ' + iceCream.toString());
// Overriding the toString method
IceCream.prototype.toString = function() {
    return `${this.flavor}`
}

console.log('IceCream as a string: ' + iceCream.toString());

// DO NOT DO
// Object.prototype.hello = function() {
//     console.log('Hello!');
// }

// iceCream.hello();

// [].hello();

console.log({firstName: 'John', lastName: 'Doe'}.toString());

iceCream.doSomething = function() {}

iceCream.doSomething();

let anotherIceCream = {
    flavor: 'Vanilla',
    price: this
}

anotherIceCream.__proto__ = IceCream.prototype;

console.log(anotherIceCream.toString()); // It uses Object's toString since it does NOT inherit from IceCream
