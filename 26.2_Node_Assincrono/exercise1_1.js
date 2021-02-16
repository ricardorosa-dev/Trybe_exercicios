function mul (p1, p2, p3) {
  return new Promise((resolve, reject) => {
    if (
      typeof p1 === "number" &&
      typeof p2 === "number" &&
      typeof p3 === "number"
    ) {
      const myNumber = (p1 + p2) * p3;
      if (myNumber < 50) {
        return reject("Valor muito baixo");
      }
      console.log(myNumber);
      return resolve(myNumber);
    } else {
      return reject("Digite apenas números");
    }
  })
}

mul(1, 34, 50);
