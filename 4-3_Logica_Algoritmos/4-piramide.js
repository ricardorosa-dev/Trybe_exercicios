let n = 5;
let checkStart = 3; //2
let checkEnd = 3;
let linha = "";

console.log("");
console.log("")

for (let j = 0; j < n - 2; j++) {
    for (let i = 0; i < n; i++) {
        if (i < checkStart - 1 || i > checkEnd - 1) {
            linha += " ";
        } else {
            linha += "*";
        }
    }
    console.log(linha);
    linha = "";
    checkStart -= 1;
    checkEnd += 1;
}