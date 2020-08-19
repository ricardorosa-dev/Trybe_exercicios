const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


function criarObjeto(chave, valor) {
  return { [chave]: valor };
};

const criarObjeto = (chave, valor) => ({ [chave]: valor });

const myObj = criarObjeto('aipim', 'mil reais ainda');
console.log(myObj);
