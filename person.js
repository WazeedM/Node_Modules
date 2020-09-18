// const person = {
//     name: 'Wazeed Mohammad',
//     age: 26
// };

// module.exports = person;

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;