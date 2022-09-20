// Objects in JS are key-value pairs

const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 21,
    classes: ['Math', 'Science', 'History']
};

student.major = 'Science';

console.log(student);
// Object.freeze(student); // This locks down the object and prevents modifications to it

student.pet = 'Spot';
console.log(student);


// Defining object properties
Object.defineProperty(student, 'lastName', {writable: false}); // Prevents modification
Object.defineProperty(student, 'age', {enumerable: false}); // Prevents it from showing in prints or loops

student.lastName = 'Thompson';
console.log(student);
console.log(student.age); // It is still accessible even with enumerable set to false
console.log(student.__proto__); // This is also non-enumerable

Object.defineProperty(student, 'lastName', {configurable: false}); // This prevents future defineProperty
// Object.defineProperty(student, 'lastName', {writable: true}); // This now throws an error
student.lastName = 'Thompson';

console.log(student);

// You can use bracket notation to assign "illegal" key names
student['first name'] = 'Brad';

console.log(student);

const school = 'Lincoln High School';

const anotherStudent = {
    [school]: 'Some value', // Dynamically change the key
    schoolName: school,
}

console.log(anotherStudent);

// Dot notation 90-10 rule
// Only use bracket notation when the key access is dynamic
