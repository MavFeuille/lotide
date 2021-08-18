const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length)  {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return (`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => pass
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => fail
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => pass
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => fail


