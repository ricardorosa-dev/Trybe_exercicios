let n = 5;
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

//Sem dois 'for', só con console.log

let quad2 = "";

for (let i2 = 0; i2 < n; i2++) {
    for (let j2 = 0; j2 < n; j2++) {
        quad2 += "*";
    }
    console.log(quad2);
    quad2 = "";
}