// A function returns everything in the array except for the first item
const tail = (array) => {
  if (array.length > 2) {
    return array.slice(1);
  } else {
    return [];
  }
};


const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




module.exports = tail