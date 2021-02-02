async function soma(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return Promise.reject(new Error("Digite apenas números"));
    }
    const sum = a + b;
    const mul = sum * c;
    return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
};

soma(3, 3, 10);


