const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


// insert assertArraysEqual and eqArrays for easy testing
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)  {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//test case
console.log(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]));




