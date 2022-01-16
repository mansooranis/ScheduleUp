# allcombinations [![Build Status](https://travis-ci.org/seriousManual/allcombinations.png)](https://travis-ci.org/seriousManual/allcombinations)

Calculates on demand all possible combinations of the elements of a given array.
For this to be efficient a ES2015 generator is utilized.

The number of possible combinations gets really big really fast (e.g. an array of 5 elements already has 120 possible permutations!).
Thus it is not realistic (or even possible) to precalculate the complete range of permutations and subsequently return it. (memory and cpu consumption would be absolutely terrible)

With this generator approach the combinations are computed lazily which results in a minimal memory footprint.  

## Installation
````bash
npm i allcombinations --save
````

## Usage
````javascript
const allcombinations = require('allcombinations');

let allCombinationsGenerator = allcombinations([1, 2, 3]);

for (var combination of allCombinationsGenerator) {
    console.log(combination);
}

// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
````
