function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
test('if function returns the expected array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);

  const myArray = [1, 2, 3, 4];
  myRemove(myArray, 0);
  expect(myArray).toEqual([1, 2, 3, 4]);

  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})
