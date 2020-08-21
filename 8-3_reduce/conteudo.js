const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenValues = numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc += curr;
  }
  return acc;
}, 0);

console.log(sumEvenValues);

//---

const evenNumbers = numbers.filter(number => number % 2 === 0);
const sumValues = evenNumbers.reduce((result, number) => result + number);
console.log(sumValues);

const filterParams = number => number % 2 === 0;
const reduceParams = (result, number) => result + number;

const evenNumbers2 = numbers.filter(filterParams).reduce(reduceParams);
console.log(evenNumbers2);
