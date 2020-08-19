const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let numbersToAdd = 1;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(numbersToAdd);
      numbersToAdd += 1;
    } else {
      results.push(characters[i]);
    }
  }
  joinedResults = results.join('');
  return joinedResults;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels(parameter), result);
