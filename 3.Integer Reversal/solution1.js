// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const reverseInt =(int) => {
    const reverse = int.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(int);
}


