let n = 7;
let linha = "";

for (let i = 0; i < n; i += 1) {
    linha += "*";
}

console.log("");

for (let i = 0; i < n - 2; i += 1) {
    console.log(linha);
}