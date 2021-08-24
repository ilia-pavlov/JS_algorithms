//  function <name>(variables) {
//  statment
//	return resolt
//  }


// function declarition statment
function greet(name) {
	return 'Hello ' + name;
}

// <name>(variables)
greet('Sorax');

// print result
console.log(greet('Sorax'));
console.log(greet('Sorax').toUpperCase());

// function difinition expression
let mix = function(name) {
	console.log(arguments);
	return 'Hello ' + name;
}; // ; !!


console.log(mix().toUpperCase());

console.log(mix('Sorax', 24, 23, 26).toUpperCase());












