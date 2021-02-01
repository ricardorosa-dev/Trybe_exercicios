var readlineSync = require('readline-sync')

function calculaIMC() {
  const peso = readlineSync.questionFloat('Qual é o seu peso amigo?\n');
  const altura = readlineSync.questionFloat('E a tua altura, amigo?\n')

  const IMC = peso / (altura**2);
  
  console.log('Seu IMC é de: ', IMC); 
}

calculaIMC();
