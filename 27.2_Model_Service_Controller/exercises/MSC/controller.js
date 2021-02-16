const service = require('./service');
const rescue = require('express-rescue');

const getAll = rescue (async (_req, res) => {
  const result = await service.getAll();
  
  res.status(200).json(result);
});

const findByCep = rescue (async (req, res) => {
  let cep = req.query.cep;
  if (cep.includes('-')) {
    const cepFormat = cep.split('-');
    cep = cepFormat[0] + cepFormat[1]; 
  }
  
  const result = await service.findByCep(cep);
  
  if (result.message) return res.status(404).json(result);
  
  return res.status(200).json(result);
})

const create = rescue (async (req, res) => {
  let { cep } = req.body;
  const { uf, cidade, bairro, logradouro, aux } = req.body;
  if (cep.includes('-')) {
    const cepFormat = cep.split('-');
    cep = cepFormat[0] + cepFormat[1]; 
  }
  
  console.log(cep)
  
  const newUser = await service.create(cep, uf, cidade, bairro, logradouro, aux);
  
  if (!newUser) return res.status(400).json({ message: 'Este CEP já existe!' });
  
  res.status(201).json({ message: 'CEP criado!' });
})

module.exports = {
  getAll,
  findByCep,
  create
}
