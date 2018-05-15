// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  

  let stringNumber = n.toString();

  if (stringNumber[0] === '-') {
    stringNumber = stringNumber.slice(1);
    return Number(stringNumber.split('').reverse().join('')) * -1;
  } else {
    return Number(stringNumber.split('').reverse().join(''));
  }
}

module.exports = reverseInt;
