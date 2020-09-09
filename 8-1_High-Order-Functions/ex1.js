const assert = require('assert');
const books = require('./books');

function authorBornIn1947() {
  const book = books.find(book => book.author.birthYear === 1947);
  return book.author.name;
}

console.log(authorBornIn1947())

assert.equal(authorBornIn1947(), 'Stephen King');
