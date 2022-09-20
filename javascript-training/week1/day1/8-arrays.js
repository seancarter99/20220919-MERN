// Arrays in JS are bascically in Java:
// ArrayList<Object> arr = new ArrayList<>();

// Declaring an array
const fruits = ['Apple', 'Mango', 'Peach', 'Dragonfruit', 'Lychee', 'Grape', 'Tomato', 'Watermelon', 'Banana', 'Pineapple'];

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For..of
for (let fruit of fruits) {
    console.log(fruit);
}

function processFruit(fruit) {
    console.log(fruit);
}

// This function will be run on every fruit in the array
fruits.forEach(processFruit);
fruits.map(processFruit);

// Remove the end element of an array
const endFruit = fruits.pop(); // Remove and return the final element of the array
fruits.pop();
fruits.pop();
console.log(endFruit);
console.log(fruits);

// Add an element to the end of an array
fruits.push(endFruit);
console.log('Fruits with pineapple added back');
console.log(fruits);

fruits[fruits.length - 1] = 'Pear';
console.log(fruits);

// Removing to the front of an array
const frontFruit = fruits.shift();
console.log('Front fruit: ' + frontFruit);
console.log(fruits);

// Adding to the front of an array
fruits.unshift(frontFruit); // Add Apple back to the front
console.log(fruits);

// Find by index
const index = fruits.indexOf('Tomato');
console.log(index);

// Remove at an index
// Remove and return a subsection of the array starting at an index, and going for 1 index

// ['Apple', 'Tomato', 'Pear']
let removedFruits = fruits.splice(index, 1);

console.log(removedFruits);
console.log(fruits);

// removedFruits = fruits.splice(0, fruits.length);
// console.log(fruits);

// Copy an array
const newFruits = fruits.slice(); // This creates a copy of the array. Same contents, different memory address
console.log(newFruits);
newFruits.shift();
console.log(fruits);