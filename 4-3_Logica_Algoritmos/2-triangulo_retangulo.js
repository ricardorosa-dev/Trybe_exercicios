let n = 5;
let quad = [];

for (let i = 0; i < n; i++) {
    quad[i] = [];
    for (let j = 0; j <= i; j++) {
        quad[i][j] = "*";
    }
}

console.log(quad);