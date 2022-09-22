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

class Student {

    #name;
    #grade;
    #major;
    #classes;

    // It expects an object as it's first parameter
    constructor({name, grade, major='Undecided', classes=[]}) {
        this.#name = name;
        this.#grade = grade;
        this.#major = major;
        this.classes = classes; // This line will trigger my check
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get grade() {
        return this.#grade;
    }

    set grade(grade) {
        this.#grade = grade;
    }

    get major() {
        return this.#major;
    }

    set major(major) {
        this.#major = major;
    }

    get classes() {
        return this.#classes;
    }

    set classes(classes) {
        if (!Array.isArray(classes)) {
            throw new Error('Classes must be defined as an array');
        }
        this.#classes = classes;
    }

    // obj.classes = someVal
}

// By default every variable is self contained inside its respective file
// To share with other files, we MUST export it

// Add to the exports object for this file
// Export the entire Student class
module.exports = Student;