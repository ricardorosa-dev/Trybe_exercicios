let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers2 : [45, 27, 57, 1330, 560, 800, 200, 70, 945 ]
let numbers2 = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i < numbers.length - 1) {
        numbers2.push(numbers[i] * numbers[i + 1]);
    } else {
        numbers2.push(numbers[i] * 2);
    }
}

console.log(numbers2);

// Poderia tanto ser com um if, como o último colocado fora do for. Acho assim mais organizado.