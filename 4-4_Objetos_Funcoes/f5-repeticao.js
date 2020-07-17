let array = [2, 3, 2, 5, 8, 2, 3, 5];
let jaApareceu = {};
let maiorNum = 0

function maiorNumero(numeros) {
    jaApareceu[numeros[0]] = 1;

    for (let i = 1; i < numeros.length; i++) {

        if (jaApareceu[numeros[i]]) {
            //console.log(jaApareceu[numeros[i]]);
            jaApareceu[numeros[i]] += 1;
        } else {
            jaApareceu[numeros[i]] = 1;
        }
    }

    console.log(jaApareceu);


    for (let each in jaApareceu) {
        if (jaApareceu[each] > maiorNum) {
            maiorNum = each;

        }
    }

    console.log("Maior num é " + maiorNum)
}

maiorNumero(array);