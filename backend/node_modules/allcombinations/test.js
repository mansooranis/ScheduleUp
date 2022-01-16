const expect = require('chai').expect;

const allcombinations = require('./index');

expect(Array.from(allcombinations([1, 2, 3]))).to.deep.equal([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
]);

console.log('kthxbye');