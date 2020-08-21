const assert = require('assert');

function Verify(pass) {

  if (pass === undefined) {
    throw new Error('A sua senha não pode ser nula');
  } else if (pass.length <= 8) {
    throw new Error('A sua senha deve ter ao menos 9 caracteres');
  }

  passArray = pass.split('');
  const hasUppercase = (letter) => letter === letter.toUpperCase();
  const hasLowercase = (letter) => letter === letter.toLowerCase();
  if (passArray.some(hasUppercase) !== true || passArray.some(hasLowercase) !== true) {
    throw new Error('A sua senha deve ter ao menos uma letra maiúscula e uma minúscula');
  }

  const hasSomeNumber = (letter) => isNaN(letter) === false;
  if (hasSomeNumber) {
    throw new Error('A sua senha deve ter ao menos um número');
  }

  return pass;
}

let password = 0;

// console.log(Verify('testesMeus'));
// Verify('testesM3us')

assert.strictEqual(typeof Verify, 'function');
assert.throws(function () {
  Verify();
}, Error('A sua senha não pode ser nula'));
assert.throws(function () {
  Verify('1234aE7');
}, Error('A sua senha deve ter ao menos 9 caracteres'));
assert.throws(function () {
  Verify('testesmeus');
}, Error('A sua senha deve ter ao menos uma letra maiúscula e uma minúscula'));
assert.throws(function () {
  Verify('TESTESMEUS');
}, Error('A sua senha deve ter ao menos uma letra maiúscula e uma minúscula'));
assert.throws(function () {
  Verify('umteSteaqui');
}, Error('A sua senha deve ter ao menos um número'));
