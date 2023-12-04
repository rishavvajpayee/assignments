/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0
    for (let ele of str){
      if (vowels.includes(ele.toLowerCase())){
        count++
      }
    }
    return count
}

let c = countVowels("aeiourishav");
console.log(c);


module.exports = countVowels;