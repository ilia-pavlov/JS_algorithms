let person = {
    name: 'Sorax',
    age: 20,
    gender: 'male',
    sayHi: function(){
        return 'Hello!!';
    }
};
console.log(person);

person.age = 25;
person.userID = 222334;

console.log(person.name);
console.log(person.gender)
console.log(person['age']);
console.log(person);
console.log(person.sayHi());

var car = Object.create({x: 10, y: 20}); //doesn't work
console.log(car);

console.log(car.hasOwnProperty('x'));
car.x = 20;

console.log(car);
console.log(car.x);

console.log(car.hasOwnProperty('x'));
delete car.x
console.log(car);
console.log('x' in car);
console.log('o' in car);