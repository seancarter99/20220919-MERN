// Classes in JS are simply "syntactic sugar" for constructor functions
// "syntactic sugar" means it accomplishes the same thing functionally, it's just easier to write/read

// If not specified, the class will extend Object by default
class Bird {
    // Define variables
    #color; // # indicates to JS that this is "private"
    wingspan;
    static feet = 2; // This value is shared between ALL bird objects

    constructor(color, wingspan) {
        this.#color = color;
        this.wingspan = wingspan;
    }

    getColor() {
        // Since I'm in the class, I can access the private value
        return this.#color;
    }

    // Getter function
    // Whenever I say bird.color it will call this function
    get color() {
        return this.#color;
    }

    // Setter function
    // Whenever I say bird.color = "something" it will call this function
    set color(color) {
        // This setter allows me to run some intermediary logic when setting values
        console.log('Inside setter');
        if (typeof color !== 'string') {
            throw new TypeError("Must be a string");
        }
        this.#color = color;
    }

    // Private helper methods
    #calculateHexCode() {
        if (this.#color === 'Red') {
            return 'FF0000';
        }
    }

    // Static function
    static hello() {
        console.log('Hello!');
    }
}

Bird.feet = 2; // This does the same thing as static

Bird.goodbye = function() {
    console.log('Goodbye!');
}

// function Bird(color, wingspan) {
//     this.color = color;
//     this.wingspan = wingspan;

//     Object.defineProperties(this, {
//         'color': {
//             'get': function() {return this.color},
//             'set': function(color) {
//                 if (typeof color !== 'string') {
//                     return;
//                 }
//                 this.color = color;
//             }
//         }
//     });
// }

const bird = new Bird('Blue', 7);

console.log(bird.getColor());
console.log(bird.color); // This will call the getter in the class

bird.color = 1;
console.log(bird.color);

console.log(Bird.feet) // Static variable/functions MUST be accessed off the class itself

class Raven extends Bird {

}

const raven = new Raven();

console.log(raven.__proto__ === Raven.prototype); // True
console.log(raven.__proto__.__proto__ === Bird.prototype); // True
console.log(raven.__proto__.__proto__.__proto__ === Object.prototype); // True
console.log(raven.__proto__.__proto__.__proto__.__proto__ === null); // True

// By default every object's __proto__ points to Object.prototype
console.log({}.__proto__ === Object.prototype); // True
console.log(new Object().__proto__ === Object.prototype); // True
console.log(Object.create({}).__proto__.__proto__ === Object.prototype);

// If I want an object free of the inheritance tree (AKA does not extend Object)
const freedObject = Object.create(null);
console.log(freedObject.__proto__);

const myNewObj = Object.create({});
myNewObj.something = 'something';
