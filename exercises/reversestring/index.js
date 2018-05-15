// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let string = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   string += str[i];
  // }
  // return string;

  // return str.split('').reverse().join('');

  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse;

