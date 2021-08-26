let Person, person, diffPerson
// capital letter Person use for constructors
Person = function(name) {
    this.bla = name;
};

Person.prototype.greet = function() { //add any function to sure object and all other function will inheritence it
    console.log('Hello, my name is ' + this.bla);
};

person = new Person('Jack');
console.log(person.bla);
person.greet();

diffPerson = new Person('Bruce');
console.log(diffPerson.bla);
diffPerson.greet();
// 2 ways to achieve same result
console.log(diffPerson instanceof Person);
console.log(Person.prototype.isPrototypeOf(diffPerson));
let thirdPerson;
console.log(thirdPerson instanceof Person);
console.log(Person.prototype.isPrototypeOf(thirdPerson));