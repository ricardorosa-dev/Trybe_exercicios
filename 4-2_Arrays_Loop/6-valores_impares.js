let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        //É ímpar.
        valoresImpares += 1;
        console.log(numbers[i] + " é ímpar.");
    }
}

if (valoresImpares !== 0) {
    console.log("O número de valores ímpares no array 'numbers' é de " + valoresImpares);
} else {
    console.log("Nenhum valor ímpar encontrado no array 'numbers");
}