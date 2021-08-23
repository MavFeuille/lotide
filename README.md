# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mavfeuille/lotide`

**Require it:**

`const _ = require('@mavfeuille/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first item in the array.
* `tail(array)` Returns everything except for the first item in the array.
* `middle(array)`: REturns the middle-most elements of the array.