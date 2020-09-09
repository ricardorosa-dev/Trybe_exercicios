const assert = require('assert');
const books = require('./books');

function smallerName() {
  let num;

  books.forEach(book => {
    if (!num) {
      num = book;
    } else {
      if (book.name.length < num.name.length) {
        num = book;
      }
    }
  })

  let nameBook = num.name;

  return nameBook;
}

assert.equal(smallerName(), 'Duna');
