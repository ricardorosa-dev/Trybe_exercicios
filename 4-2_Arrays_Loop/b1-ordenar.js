let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            let pos = numbers[j];

            numbers[j] = numbers[i];
            numbers[i] = pos;
        }
    }
}

console.log(numbers);

// O que acontece é que, a cada número, partindo do segundo (array[1]), ele vai iterar por cada número que vem antes, trocando os dois, caso seja maior do que o número atual.