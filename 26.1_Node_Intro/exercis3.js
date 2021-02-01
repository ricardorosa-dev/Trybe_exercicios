var inquirer = require('inquirer');

const requireNumber = (value) => {
  if (/\d/.test(value)) {
    return true;
  }
  
  return 'coloca um numero bro';
}

const questions = [
  {
    type: 'number',
    name: 'peso',
    message: 'Qual é o seu peso?',
    validate: requireNumber,
  },
  {
    type: 'number',
    name: 'altura',
    message: 'Qual é a sua altura',
    validate: requireNumber,
  }
]

inquirer.prompt(questions)
  .then(answer => {
    console.log('This is an answer', answer);
    
    const IMC = answer.peso / (answer.altura**2);
    // console.log('Seu IMC é de: ', IMC);
    
    let resultado;
  switch(true) {
    case (IMC < 18.5):
      resultado = "Abaixo do peso (magreza)"
      break;
    case (IMC >= 18.5 && IMC <= 24.9 ):
      resultado = "Peso normal"
      break;
    case (IMC >= 25.0 && IMC <= 29.9 ):
      resultado = "Acima do peso (sobrepeso)"
      break;
    case (IMC >= 30.0 && IMC <= 34.9 ):
      resultado = "Obesidade grau I"
      break;
    case (IMC >= 35.0 && IMC <= 39.9 ):
      resultado = "Obesidade grau II"
      break;
    case (IMC >= 40.0):
      resultado = "Obesidade graus III e IV"
      break;
    default:
      resultado = "Por favor insira um número"
  }
  
  console.log('Seu IMC é de: ', IMC, resultado); 
    
  })
  .catch(error => {
    console.log('Error: ', error);
  })
