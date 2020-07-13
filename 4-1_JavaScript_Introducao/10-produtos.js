let custo = 10;
let custoComImposto = custo + custo * 0.2;
let valorVenda = 15;
let lucro = valorVenda - custoComImposto;
let milProdutos = lucro * 1000;

if (custo < 0 || valorVenda < 0) {
    console.log("Coloque um valor real.");
} else {
    console.log("O valor de custo do produto é de " + custo + ". Com imposto, o valor pago sobe para " + custoComImposto + ". O valor de venda do produto é de " + valorVenda + ". Deste modo, o lucro sobre cada produto é de " + lucro + ". Por fim, o lucro sobre mil produtos é de " + milProdutos + ".");
}