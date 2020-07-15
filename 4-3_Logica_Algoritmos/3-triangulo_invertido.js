let n = 5;


let q = "";
let check = n - 1;

for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i += 1) {
        if (i < check) {
            q += " ";
        } else {
            q += "*";
        }
    }
    console.log(q);
    q = "";
    check -= 1;
}

// Com arrays

let quad = [];
check = n - 1;

for (j = 0; j < n; j++) {
    quad[j] = [];
    for (i = 0; i < n; i++) {
        if (i < check) {
            quad[j][i] = " ";
        } else {
            quad[j][i] = "*";
        }
    }

    check -= 1;
}
console.log(quad);