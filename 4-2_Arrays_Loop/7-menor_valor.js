let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 100;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorNumero) {
        console.log("A variável 'menorNumero' era " + menorNumero + ". Porém " + numbers[i] + " é menor. Então agora 'menorNumero' é " + numbers[i]);
        menorNumero = numbers[i];
    }
}

console.log("O menor valor contido na array 'numbers' é de " + menorNumero + ".");