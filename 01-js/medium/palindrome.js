/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const normalStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(normalStr);
  const reverseStr = normalStr.split('').reverse().join('')
  return normalStr == reverseStr;
}

const result1 = isPalindrome("A man, a plan, a canal, Panama!");
console.log(result1);

module.exports = isPalindrome;
