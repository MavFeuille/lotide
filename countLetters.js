const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const outcome = {};

  for (letter of string) {
    if (letter === " ") { //To skip and not count spaces
      continue;
    } else if (outcome[letter]) {
      outcome[letter]++;
    } else {
      outcome[letter] = 1;
    }
  }
  return outcome;
};

//test case
console.log(countLetters("lighthouse in the house"));

