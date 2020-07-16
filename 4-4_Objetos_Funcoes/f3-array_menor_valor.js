function menorValor(numeros) {
    let menor = 1000000;

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = [i];
        }
    }

    console.log("O índice do menor valor é " + menor);
}

menorValor([2, 4, 6, 7, 10, 0, -3]);