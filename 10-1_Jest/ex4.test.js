const assert = require('assert');
const { hasUncaughtExceptionCaptureCallback } = require('process');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

test('Se a função myFizzBuzz tem o retorno esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(6)).toBe('fizz');
  expect(myFizzBuzz(5)).toBe('buzz');
  expect(myFizzBuzz(7)).toBe(7);
  expect(myFizzBuzz('no number')).toBe(false);
})
