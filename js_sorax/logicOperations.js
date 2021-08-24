console.log(true);
console.log(false);

console.log(5 == 5);
console.log(5 == 6);
console.log('');

console.log(Boolean(5));

// Falsy values
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log('');

let s = 'Test';

if (s) {
	console.log("It's true");
}

// with empty value statment will not execute
let b = '';

if (b) {
	console.log("It's true");
}

console.log('');
console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

var a = 0,
	isTrue = true
isTrue && (a = 5);
console.log(a);

let someString = 'Some string info';
let newString = someString || 'Default String';
console.log(newString);















