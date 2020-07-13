let num1 = 3;
let num2 = 99;
let num3 = 890;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 " + num1);
    } else {
        console.log("num3 " + num3);
    }
} else if (num2 > num3) {
    console.log("num2 " + num2);
} else {
    console.log("num3 " + num3);
}