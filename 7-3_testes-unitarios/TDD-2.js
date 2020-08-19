const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
  let wordArray = [];
  words.forEach(word => wordArray.push(word.length));
  return wordArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
