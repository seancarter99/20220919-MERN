// Two types of destructuring
// 1. Object
// 2. Array

const dog = {
    name: 'Fido',
    age: 47,
    breed: {
        name: 'Rottweiler',
        isPure: true
    },
    weight: 150,
    height: 7,
    color: 'Black',
    legs: 3,
    hasTail: false,
    hasOwner: false
}

const getFido = () => dog;

// I just want to extract certain fields from the object as variables
// I can destructure just the stuff I want

// name, breed, and color are now variables holding those values
// What I call them, has to match up with the key name
// I can alias name to be firstName
const { name: firstName, breed: { name: breed, isPure }, color, ...rest } = getFido();

console.log(breed);
console.log(rest);

// Destructuring from a function's parameters
const displayInfoOnDish = ({name: dishName, calories=100, ingredients, ...props}, chef) => {
    console.log('Name of dish:', dishName);
    console.log('Total calories of dish:', calories);
    console.log('Ingredients necessary:', ...ingredients);
    console.log('The chef for tonight is:', chef)
    console.log(props);
}

const recipe = {
    name: 'Mac N Cheese',
    calories: 800,
    ingredients: ['Noodles', 'Cheese', 'Breadcrumbs', 'Bacon Bits'],
    imageURL: 'https://onmilwaukee.com/images/articles/ea/eat-this-now-macs-mac-n-cheese/eat-this-now-macs-mac-n-cheese_fullsize_story1.jpg',
    cookTime: 10
}

displayInfoOnDish(recipe, 'Sean');

displayInfoOnDish({ingredients: ['Bread', 'Peanut Butter', 'Grape Jelly', 'Honey'], name: 'PB&J', location: 'Houston'});

// Array Destructuring

const fruits = ['Apple', 'Mango', 'Peach', 'Dragonfruit', 'Lychee', 'Grape', 'Tomato', 'Watermelon', 'Banana', 'Pineapple'];

// Extract the first two elements from the array
const [fruit1, fruit2, fruit3, ...restOfFruits] = fruits;

console.log(fruit2);
console.log(restOfFruits);

// Skip the first three fruits
const [,,,fruit4] = fruits;
console.log(fruit4);