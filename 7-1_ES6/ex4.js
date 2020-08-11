let skillArray = [
  'HTML',
  'CSS',
  'JavaScript',
  'DOM',
  'vsCode'
]

let changeX = (givenString, param) => {
  let string = givenString;

  let stringArray = string.split('');

  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] === 'x') {
      stringArray[i] = param;
    }
  }
  string = stringArray.join('');

  return string
}

function stringSkills(param1,) {
  skillArray.sort();
  let answer = `O que é um Tryber?
  ${param1}
  Esse Tryber em especial tem as seguintes skills:
  ${skillArray[0]}, ${skillArray[1]}, ${skillArray[2]}, ${skillArray[3]} e ${skillArray[4]}.`

  console.log(answer);
}

stringSkills(changeX('Tryber x aqui.', 'é um tipo de animal animal que está'));
