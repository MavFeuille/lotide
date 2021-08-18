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


const without = function(source, itemsToRemove) {

  let newArr = [];
  
  for (let i = 0; i < source.length; i ++) {
    let removeWord = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeWord = true;
      }
    }
    if (removeWord === false) {
      newArr.push(source[i]);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


//Below codes are for making sure the original assertArraysEqual function is not alterd
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);