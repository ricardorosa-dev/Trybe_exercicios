function palindromo(palavra) {
    let reverso = "";

    for (i = palavra.length - 1; i >= 0; i--) {
        reverso += palavra[i];
    }

    console.log(reverso);

    if (palavra === reverso) {
        console.log("É um palíndromo.");
        return true;
    } else {
        console.log("Não é um palíndromo.");
        return false;
    }
}

palindromo("arara");