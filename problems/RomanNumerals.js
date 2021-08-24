/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
 function romanToInteger(num) {
    // your code here
    const mapping = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];
  
    let current = num;
    let res = '';
    for (let i = 0; i < mapping.length; ++i) {
      if (current <= 0) {
        break;
      }
  
      const [value, ch] = mapping[i];
  
      while (current >= value) {
        current = current - value;
        res = `${res}${ch}`;
      }
    }
  
    return res;
  }
  
  result = romanToInteger(900)
  console.log(result)