// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   //we are going to reverse a string
//   // and compare the reverse one with the original one if they match
//   return str.split('').every((cc, i, arr) => {
//     return cc === arr[arr.length - 1 - i];
//   });
// }
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed==str;
// }
// function palindrome(str) {
//   return str.split('').every((value, index, array) => {
//     return value == array[array.length - 1 - index];
//   });
// }

function palindrome(str) {
  const reversed = str.split('').reduce((acc, cc) => {
    return cc+acc
  }, '')
  return str==reversed
}
// -----------------1----------------------
// function palindrome(str) {
//   //we are going to reverse a string
//   // and compare the reverse one with the original one if they match
//   let reverseStr = str.split('').reverse().join('');

//   return reverseStr == str;
// }
// -----------------2----------------------
// function palindrome(str) {
//   //we are going to reverse a string
//   // and compare the reverse one with the original one if they match
//   let reverseStr = str.split('').reduce((acc, cc) => {
//     return cc + acc;
//   }, '');

//   return reverseStr == str;
// }

// -----------------3----------------------
// function palindrome(str) {
//   //we are going to reverse a string
//   // and compare the reverse one with the original one if they match
//   let reverseStr = '';
//   for (const char of str) {
//     reverseStr = char + reverseStr;
//   }
//   return reverseStr == str;
// }

module.exports = palindrome;
