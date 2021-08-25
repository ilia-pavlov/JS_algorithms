let person = {
    name: 'Sorax',
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
};

console.log(person.age);

person.age = 180;
console.log(person.age);
person.age = -80;
console.log(person.age);
person.age = 34;
console.log(person.age);

//atribuits: writable, enumerable, configurable

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'age'));

Object.defineProperty(person, 'gender', {
    value: 'male',
    writable: false, //block to rewrite 'gender' value
    enumerable: true, // if cahnge of 'false' it will not displays in 'for' loop
    configurable: false // true allows to change atribuits 
});

console.log(person.gender);
person.gender = 'female';
console.log(person.gender);
console.log('');

for (objectAtributes in person) {
    console.log(objectAtributes);
}

console.log(Object.keys(person));
console.log(person.propertyIsEnumerable('gender')); // to check if enumerable true/flase

let o = {};
Object.defineProperties(o, { //just two parameters 
    x: {
        value:10,
        writable: true // false make atribuit un writable
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
});

o.x = 1;
console.log(o.r);

let obj = {};
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj); //block to add atributes to object
console.log(Object.isExtensible(obj));

obj.x = 2323;
console.log(obj.x);

Object.seal(obj); // make all object attribute false
console.log(Object.isSealed(obj));

Object.freeze(obj); // make all object attribute false and allows only read access
console.log(Object.isFrozen(obj));