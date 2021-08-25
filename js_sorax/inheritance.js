// prototypal inheritance 
let Person = {
    constructor: function(string1, int, string2) {
        this.name = string1;
        this.age = int;
        this.gender = string2;
        return this;
    },
    greet: function() {
        console.log('Hi, my name is ' + this.name);
    }
};

let person, difPerson, thirdPerson;

person = Object.create(Person).
        constructor('John', 35, 'male');
difPerson = Object.create(Person).
        constructor('Jessica', 37, 'female');
thirdPerson = Object.create(Person).
        constructor('Bruce', 28, 'male');

console.log(person.name);
console.log(difPerson.age);
console.log(thirdPerson.name);

person.greet();
difPerson.greet();
thirdPerson.greet();