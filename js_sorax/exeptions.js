let myError = new Error('My Error Message');
console.log(myError.message);
console.log(myError.name);

// throw myError;

let calculate = function(n){
    if (n >10) throw new Error ('n should be less then 10');
    if (n === 10) throw myError;
};

// calculate(10); // try 20 

try {
    calculate(20); //try 10
} catch (e) {
    console.log('Can\'t\ execute calculate: ' + e.message);
};