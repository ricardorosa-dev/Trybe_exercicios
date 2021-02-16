const model = require('./model');

const getAll = async () => await model.getAll();

const findByCep = async (cep) => {  
  // Tem só números e hífen? Tem 8 números?
  const re = new RegExp(/^\d{5}-?\d{3}$/);
  const test = re.test(cep);
  if (test === false) return { message: 'CEP inválido!' };
  
  const findCep = await model.findByCep(cep);
  
  if (!findCep) return { message: 'CEP não encontrado' };
  return findCep;
};

const create = async (cep, uf, cidade, bairro, logradouro, aux) => {
  const existUser = await model.findInDatabase(cep);
  if(existUser) return false;
  
  const user = await model.create(cep, uf, cidade, bairro, logradouro, aux);
  return user;
}

module.exports = {
  getAll,
  findByCep,
  create,
}
