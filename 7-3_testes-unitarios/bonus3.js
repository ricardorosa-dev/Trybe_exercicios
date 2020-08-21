const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle(words) {
  const middleOfArray = Math.ceil((words.length / 2) - 1);

  return words.splice(middleOfArray, 1);
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
