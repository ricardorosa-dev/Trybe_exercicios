let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    console.log("One of the numbers in 'numbers' is " + numbers[i]);
    if (numbers[i] > bigNumber) {
        console.log(numbers[i] + " é maior que o valor de 'bigNumber, que é " + bigNumber);
        bigNumber = numbers[i];
        console.log("bigNumber agora é " + bigNumber);

    }
}

console.log(bigNumber);