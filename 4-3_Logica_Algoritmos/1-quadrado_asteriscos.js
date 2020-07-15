let n = 3;
let quad = [];

if (n > 1) {
    for (let i = 0; i < n; i++) {
        quad[i] = [];
        for (let j = 0; j < n; j++) {
            quad[i][j] = "*";

        }

    }
    console.log(quad);
} else {
    console.log("O valor da variável 'n' deve ser maior que 1.");
}