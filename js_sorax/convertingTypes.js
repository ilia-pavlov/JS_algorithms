console.log(5 + '5');
console.log(typeof(5 + '5'));
console.log('5' * '4');
console.log(typeof('5' * '4'));
console.log('5' * 'hi');
console.log(typeof('5' * 'hi'));

console.log(Number('555'));
console.log(String('333'));
console.log(Boolean(1));

// '!!' logic operetar transform numbers in boolean type
console.log(!!5);
console.log(!!0);
// make a string from number add ''
console.log(345 + '');
// make a number from string add +
console.log(+'456');

let number = 22;
console.log(number.toString());
number = 45;
console.log(number.toString(3));
number = 5;
// in radix return here 101
console.log(number.toString(2)); 

console.log(false.toString());

console.log(parseInt('45 px'));
console.log(parseFloat('12.45 bla bla'));
// return '0'
console.log(+'');

console.log(+'             4');
console.log(parseInt('       4  grds'));
console.log(typeof parseInt('       4  grds'));
// return '1'
console.log(+true);
// return '0'
console.log(+false);


// don't use == use instead ===






















