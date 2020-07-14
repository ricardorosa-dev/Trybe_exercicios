let salBruto = 3000;
let INSS;
let salBase;
let IR;
let salLiquido;

if (salBruto <= 1556.94) {
    INSS = salBruto * 0.08;
} else if (salBruto <= 2594.92) {
    INSS = salBruto * 0.09;
} else if (salBruto <= 5189.82) {
    INSS = salBruto * 0.11;
} else {
    INSS = 570.88;
}

salBase = salBruto - INSS;


if (salBase <= 1903.98) {
    IR = 0;
} else if (salBase <= 2826.65) {
    IR = (salBase * 0.075) - 142.80;
} else if (salBase <= 3751.05) {
    IR = (salBase * 0.15) - 354.80;
} else if (salBase <= 4664.68) {
    IR = (salBase * 0.225) - 636.13;
} else {
    IR = (salBase * 0.275) - 869.36;
}

salLiquido = salBase - IR;

console.log("O salário bruto é de " + salBruto + ". Portanto, o INSS será de " + INSS + ". O salário base (salário líquido - INSS) portanto será de " + salBase + ". O valor do imposto de renda, para este salário base será de " + IR + ". O salário base, reduzido pelo IR, será de " + salLiquido + ". que é o valor líquido, que a pessoa receberá.");