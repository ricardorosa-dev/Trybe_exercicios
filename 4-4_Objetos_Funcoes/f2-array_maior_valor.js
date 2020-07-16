function maiorValor(numeros) {
    let maior = 0;

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = [i];
        }
    }

    console.log("O índice do maior valor é " + maior);
}

maiorValor([2, 3, 6, 7, 10, 1]);