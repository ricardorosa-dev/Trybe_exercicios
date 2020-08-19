// Máquina de venda automática
// Calcula a diferença do dinheiro recebido e preço
// Selecionar troco
// 1- selecionar um item; 2- depositar o pagamento; 3- receber o item e troco
const assert = require('assert');

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  // escreva seu código aqui...

  if (remaining <= 0) {
    throw 'Error: paid value is not enough';
  }

  for (let i = 0; i < length; i += 0) {
    if (remaining >= coins[i]) {
      change.push(coins[i])
      console.log(change);
      remaining -= coins[i];
      console.log(remaining);
    } else {
      i += 1;
    }
  }

  return change;
}



let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
