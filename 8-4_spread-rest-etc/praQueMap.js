// POR QUE QUE USA .MAP()

const myArray = [1, 2, 3, 4, 5];

function multiplyByTwo(array) {
  let outerArray = [];
  for (let i = 0; i < array.length; i += 1) {
    outerArray[i] = array[i] * 2;
  }
  return outerArray;
}

const arrayMultiplied = multiplyByTwo(myArray);
console.log(arrayMultiplied);

// AGORA COM .MAP() ------------------------>

const arrayMult = myArray.map(num => num * 2);
console.log(arrayMult);
