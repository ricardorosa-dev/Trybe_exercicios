function soma(a, b, c) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return reject(new Error("Digite apenas números"));
    }
    resolve(a + b);
  })
  .then((r) => {
    console.log(r * c)
      if (r * c < 50) {
        return Promise.reject(new Error("Valor muito baixo"));
      }
      // console.log(r * c);
      return r * c;
  })
}

soma(3, 3, 10);

// Quanto eu coloco dentro da Promise e quanto dentro do .then()???
// - primeira coisa, eu não preciso de um console.log, eu posso retornar a mensagem de erro direto dentro do reject(new Error("")). 
// - E a soma é feita no resolve(a + b), acho que é como um return pro then pegar depois. Chega como parâmetro do .then((param) => {})
// - Dentro do .then tem que escrever return Promise.reject ? Só o reject não funciona?
