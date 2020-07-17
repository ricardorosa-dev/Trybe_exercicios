function nomeMaior(nomesArray) {

    let indiceMaiorNome = "";

    for (let i = 0; i < nomesArray.length; i++) {
        quantLetras = 0;

        for (let j = 0; j < nomesArray[i].length; j++) {
            quantLetras += 1;
        }

        if (quantLetras > indiceMaiorNome.length) {
            indiceMaiorNome = nomesArray[i];
        }
    }
    console.log(indiceMaiorNome);
}

nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);