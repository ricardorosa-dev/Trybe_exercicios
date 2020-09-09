let num = 3;

function resolve() {
  setTimeout(function () {
    num = 6;
  }, 1000);
}

// const myFunction =
//   (new Promise(callback) => {
//   num = 5
//   console.log('fazendo alguma coisa')
//   callback()
// }).then(function)

// console.log(myFunction(changeNum));

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve('done'), 1000);
// });

// promise.then(
//   result => console.log(result)
// );

let num2 = 9;

const showNumber = async () => {
  await setTimeout(() => num2 = 10, 1000)
  await console.log(num2);
}

showNumber();
