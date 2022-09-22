/**
 * Student should have a name
 * Student should have a grade
 * Student should have a major
 * When creating a student, if no major is specified, they are said to be "Undecided" as a major
 * Student should have an array of classes they are taking
 * Student should have a function to calculate their letter grade
 * 
 * I want the ability to sort students by grade and major and name
 */

// Importing another file
// Pull out the Student class from the file Student.js

// ./ indicates to look in the current directory
const Student = require('./Student.js'); 

describe('Student Initialization', () => {
    it('Should default no major as Undecided', () => {
        const student = new Student({});
        expect(student.major).toBe('Undecided');
    });

    // if they pass something that's not a array for classes, throw an error
    it('Should prevent non-arrays being passed for classes', () => {
        expect(() => new Student({classes: null})).toThrowError(Error);
    });
});

describe('Sorting', () => {

    const students = [
        new Student({grade: 73, name: 'Jack', major: 'Math'}),
        new Student({grade: 92, name: 'Zack', major: 'Science'}),
        new Student({grade: 88, name: 'Mack', major: 'Algebra'})
    ];

    it('Sort an array of students by grade', () => {
        // Array Destructuring

        //                                                                  92 - 73 -> Positive number
        const [top, middle, last] = students.sort((student1, student2) => student2.grade - student1.grade);
        expect(top.name).toBe('Zack');
        expect(middle.name).toBe('Mack');
        expect(last.name).toBe('Jack');
    });

    it('Sort an array of students by name', () => {
        const [first, middle, last] = students.sort((student1, student2) => {
            return student1.name < student2.name ? -1 : student1.name > student2.name ? 1 : 0;
        });
        expect(first.name).toBe('Jack');
        expect(middle.name).toBe('Mack');
        expect(last.name).toBe('Zack');
    });

    it('Sort an array of students by major', () => {
        const [first, middle, last] = students.sort((student1, student2) => {

            /**
             * When using <, > or === on a String it does the following:
             * 
             * Spread both strings into arrays
             * Loop over index by index comparing characters
             * Once it finds a character that differs, it returns 1 or -1 depending on which was bigger
             * If it reaches the end with no different characters, returns 0
             */
            return student1.major < student2.major ? -1 : student1.major > student2.major ? 1 : 0;
        });
        expect(first.name).toBe('Mack');
        expect(middle.name).toBe('Jack');
        expect(last.name).toBe('Zack');
    });
});