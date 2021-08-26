let Person, person, diffPerson, Developer, developer;
// capital letter Person use for constructors
Person = function(name) {
    this.bla = name;
};

Person.prototype.greet = function() { //add any function to sure object and all other function will inheritence it
    console.log('Hello, my name is ' + this.bla);
};

Person.prototype.toString = function() {
    return this.bla;
};

Person.prototype.valueOf = function() {
    return 100; //overright function toString
}

Developer = function(name, skills) {
    Person.apply(this, arguments);
    this.smt = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer = new Developer('John', ['java', 'python', 'js']);
console.log(developer.bla);
console.log(developer.smt);
developer.greet();

console.log(developer instanceof Developer);
console.log(developer instanceof Person);

console.log('The name is ' + developer); // after adding toString function