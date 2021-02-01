var readlineSync = require('readline-sync')

function calculaIMC() {
  const peso = readlineSync.questionFloat('Qual é o seu peso amigo?\n');
  const altura = readlineSync.questionFloat('E a tua altura, amigo?\n')

  const IMC = peso / (altura**2);
  
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
}

calculaIMC();
