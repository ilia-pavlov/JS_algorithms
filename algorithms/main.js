function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
console.log(end + ' first look');
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
console.log(middle + ' I"m pretty middle');        
        if (sortedArray[middle] === key) {  //?? since we using advance Array, it's probalby doen't work!! sortedArray[middle]
console.log('sortedArray[middle] = ' + sortedArray[middle])        // found the key
            return middle;  // ?? why with longArray it's not stoping on 1 and keep going.
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
console.log(start + ' this is the start');
        } else {
            // search searching to the left
            end = middle - 1;
console.log(end, middle + ' -1 this is the end');
        }
    }
	// key wasn't found
    return -1;
}

let exclusive = 102400;
let longArray = [...Array(exclusive).keys()];
//console.log(longArray)
let key = 2;

let result = binarySearch(longArray, key);
console.log('');
console.log('printed ' + result + ' result');

let simpleArray = [1,2,3,4,5,6,7,8,9,10,11,12];
let num = 2;

let sipmeCase = binarySearch(simpleArray, num);
console.log('');
console.log('printed ' + sipmeCase + ' result')

