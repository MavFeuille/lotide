const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
 if (array[0] === true) {
   return array[0];
  } else {
   return "";
  }
};
 

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["NO","oh",7]), 5);