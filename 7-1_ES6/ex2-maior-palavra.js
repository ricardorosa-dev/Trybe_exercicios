let frase = 'Eu queriamesmo um carro pra voar pelo espaço.';

let longestWord = (param) => {
  let wordArray = param.split(' ');
  let biggestWord = '';

  for (let i = 0; i < wordArray.length; i += 1) {

    if (wordArray[i].length > biggestWord.length) {
      biggestWord = wordArray[i];
    }
  }

  console.log(biggestWord);
}

longestWord(frase);
