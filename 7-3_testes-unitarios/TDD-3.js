const assert = require('assert');
// escreva a função addAllnumbers aqui
function addAllnumbers(param) {
  let total = 0;
  param.forEach(num => total += num);
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
