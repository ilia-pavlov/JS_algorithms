console.log('Some string');
console.log('Another string');
console.log('');

console.log('Some "long" string');
console.log("Some 'long' string");
console.log('Another \'very long\' string');
console.log('');

console.log('Hello there'.length);

console.log('Another very long string');
console.log('Another\
	very long \
string');

// \n - new line
console.log('Another \nvery long \nstring');
// \t - tab
console.log('Another \n\tvery long \n\t\tstring');
console.log('Another \'very \\ long\' string');


let str = 'Hello';
console.log(str + ' world!');
console.log('');



let string = 'Sometimes the same is defferent';
console.log(string.charAt(0));
// return last character from string
console.log(string.charAt(string.length - 1));
console.log(string.substring(10)); 
// string from 'n' character to 'n' character
console.log(string.substring(10, 21)); 
console.log(string.slice(-10));
// string from 'n' character and 'n' charaters after
console.log(string.substr(14, 4));  
console.log(string.indexOf('i'));
console.log(string.lastIndexOf('me'));
console.log(string.replace('is', 'is not'));
console.log(string.split(' '));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
// instead of char function 
console.log(string[4]);




