const connection = require('./connection');
const { ObjectId } = require('mongodb');
const fetch = require('node-fetch');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('cep')
    .find().toArray());
  // const api = await fetch('http://cep.la/', {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json'
  //   },
  // })
  // .then(res => res.json())
  // .then(data => data);
}

const findByCep = async (cep) => {
  let result = {};
  
  // Tem no banco de dados?
  const lookup = await findInDatabase(cep);
  if (lookup) return lookup;
  
  result = await fetch(`http://cep.la/${cep}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(res => res.json())
  .then(data => data);
  
  if (!result.length) return false;
  
  await connection()
    .then((db) => db.collection('cep')
    .insertOne(result));
  
  return result;
}

const findInDatabase = async (cep) => {
  const address = await connection()
    .then((db) => db.collection('cep')
    .findOne({ cep }));
    
    if (!address) return null;
    return address;
}

const create = async (cep, uf, cidade, bairro, logradouro, aux) => {
  return await connection()
    .then((db) => db.collection('cep')
    .insertOne({cep, uf, cidade, bairro, logradouro, aux}));
}

module.exports = {
  getAll,
  findByCep,
  findInDatabase,
  create,
}
