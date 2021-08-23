const assertEqual = require('../assertEqual');
const head = require('../head');

// Original test code from head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["NO","oh",7]), 5);
assertEqual(head([]), undefined);