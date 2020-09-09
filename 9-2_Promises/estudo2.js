const myFunction = (num) => {
  new Promise((resolve, reject) => {
    if (num) {
      resolve('FOI BÃO');
    } else {
      reject();
    }
  })
}

function funcTwo() {
  myFunction(2)
    .then(res => console.log(res))
    .catch(() => console.log('SEM NUMERO IRMÃO!'));
}

funcTwo()
