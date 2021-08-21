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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// //--------------- Primitive pseudo--------------
// > object1.key.length !== object2.key.length ?  => true to next condition : false
// > typeof object1 value !== typeof object2 value? => true to next codition : false
// > object1 value === object2 value? => true then both object equal : false
// //------------- Primitive pseudo ends------------

const eqObjects = function(object1, object2) {
  
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  //two Object have same number of Keys, if not => return false
  if (key1.length !== key2.length) {
    return false;
  }

  //Primitive test: loop through object1, check the values by key to see the same, if not => return false
  //---------- array psuedo -----------
  //two object values ([i]) are arrays? if not => false
  //loop through object1, check the values by key (includes) to see the same, if not=> false
  for (let objKey in object1) {

    if (Array.isArray(object1[objKey])) {
      if (!Array.isArray(object2[objKey])) {
        return false;
      } else if (!(eqArrays(object1[objKey], object2[objKey]))) {
        return false;
      }
    } else if (object1[objKey] !== object2[objKey]) {
      return false;
    }
  }

  return true;
  
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};



// ------------ assertObjectsEqual tests -----------------
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false

