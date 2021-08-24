console.log(typeof null);
console.log(typeof undefined);

let temp;
let obj = {};
let a = [1, 2, 3];

function greet(name) {
	return 'Hello ' + name; 
}

console.log(temp);
console.log(obj.property);
console.log(a[4]);

console.log(greet('Sorax'));
console.log(greet());

// compare with types is true
console.log(null == undefined);
// just compare themself is false
console.log(null === undefined);