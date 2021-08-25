let saySmt = function(greeting){
    return greeting + '! My name is ' + this.name; //use 'this' instead of object name
}

let person = {
    name: 'John',
    meet : saySmt
};

let difPerson = {
    name: 'Bob',
    meet : saySmt
};

console.log(person.meet('Hi'));
console.log(difPerson.meet.call(person, 'Bonjour'));
console.log(difPerson.meet.apply(person, ['Bonjour']));

let bound = saySmt.bind(difPerson);
console.log(bound('Ni hao'));