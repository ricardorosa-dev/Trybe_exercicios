const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(param, word) {
  let needlePosition = -1;
  for (let i = 0; i < param.length; i += 1) {
    if (param[i] === word) {
      needlePosition = i;
    }
  }
  return needlePosition;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
