let saySmt = function(){
    return 'Hi! My name is ' + this.name; //use 'this' instead of object name
}

let person = {
    name: 'John',
    meet : saySmt
};

let difPerson = {
    name: 'Bob',
    meet : saySmt
};

console.log(person.meet());
console.log(difPerson.meet());