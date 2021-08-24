function x(num){
    x.count = num !== undefined ? num : x.count;
    return x.count++;
};

x.count = 0;

console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x(0)); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x(500)); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x()); 

// AS an option
// let x = function(num){
//     x.count = num !== undefined ? num : x.count;
//     return x.count++;
// }