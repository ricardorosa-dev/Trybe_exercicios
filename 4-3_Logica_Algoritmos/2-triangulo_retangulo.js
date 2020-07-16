let n = 5;
let quad = [];

for (let i = 0; i < n; i++) {
    quad[i] = [];
    for (let j = 0; j <= i; j++) {
        quad[i][j] = "*";
    }
}

console.log(quad);

//Segundo jeito de fazer

let quad2 = "";

for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
        quad2 += "*";
    }
    console.log(quad2);
    quad2 = "";
}
console.log("Terceiro modo.");
// Terceiro modo, visto na resolução comentada.

n = 5;
let linha = "";

for (let indice = 0; indice < n; indice++) {
    linha += "*"
    console.log(linha);
}