const assert = require('assert');
// escreva a função addOne aqui
const addOne = (arr) => {
  let arrayPlusOne = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrayPlusOne[i] = arr[i];
    arrayPlusOne[i] += 1;
  }
  return arrayPlusOne;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);



assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
