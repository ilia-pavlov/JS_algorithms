const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const guess = list[mid]
  
      if (guess === item) {
        return mid
      }
  
      if (guess > item) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
  
    return null //if not found
  }

  let exclusive = 1024;
  let longArray = [...Array(exclusive).keys()];
  //console.log(longArray)
  let key = 2;
  
  let result = binarySearch(longArray, key);
  console.log('');
  console.log('printed ' + result + ' result');
  
  let simpleArray = [1,2,3,4,5,6,7,8,9,10];
  let num = 2;
  
  let sipmeCase = binarySearch(simpleArray, num);
  console.log('');
  console.log('printed ' + sipmeCase + ' result')  