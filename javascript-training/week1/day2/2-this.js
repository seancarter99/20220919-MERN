function myFunction() {
    this.firstName = 'Gary'
    console.log(this);
}

const obj = {
    firstName: 'John',
    create: myFunction
}

myFunction(); // This refers to the global context
console.log(obj.create());
// obj.myFunction(); // This refers to the obj the function is called with

new myFunction(); // Creates a new object, binds all references of this to the new object
