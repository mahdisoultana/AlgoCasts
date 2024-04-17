// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const orgSt = str;

//   return [...orgSt].reverse().join('');
// }
// ---
// function reverse(str) {
//   let temporary = '';
//   for (const char of str) {
//     temporary = char + temporary;
//   }
//   return temporary;
// }
//----
function reverse(str) {
  return str.split('').reduce((rev, cha) => cha + rev, '');
}

module.exports = reverse;
