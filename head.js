const head = (array) => {
  return array[0];
};
// console.log("First element: ", head([5, 6, 7]));

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5, 6, 7], 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;
