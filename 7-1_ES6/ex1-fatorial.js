function fatorial(num) {
  let fator = num;

  for (let i = num - 1; i > 0; i -= 1) {
    fator = fator * i;
  }
  console.log(fator);
}

let fatorial2 = num => {
  let fator = num;
  for (let i = num - 1; i > 0; i -= 1) {
    fator = fator * i;
  }
  console.log(fator);
}

fatorial2(4);
