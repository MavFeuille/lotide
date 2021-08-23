//test codes
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


//takeUntil codes
const takeUntil = function(array, callback) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr = array.slice(0, i);
      return newArr;
    }
  }
  return newArr;
};

//test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);