const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
//   } else {
//     return `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`;
//   }
// };

const middle = function (arr) {
  // let arrLength = arr.length;
  // let middle = arr.length / 2; // <- set this variable due to "require.length" is not a function

  // if (arrLength < 3) {
  //   return [];
  // } else if (arrLength % 2 === 0) {
  //   return arr[middle - 1], arr[middle];
  // } else {
  //   return arr[middle];
  // }


  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};

// //original test codes
// console.log(middle([1])); // => []
// console.log(middle([1, 2]))// => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); //=> [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]




//for other file use, do not remove
module.exports = middle;
