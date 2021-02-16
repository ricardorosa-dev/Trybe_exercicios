const userService = require('../services/userService');
const rescue = require('express-rescue');

const getAll = rescue (async (req, res) => {
  const result = await userService.getAll()
    
    res.status(200).json(result);
})

const findById = rescue (async (req, res) => {
  const _id = req.params.id;
  
  const user = await userService.findById(_id);
    
  res.status(200).json(user);
})

const create = rescue(async (req, res) => {
  const {first_name, last_name, email, password} = req.body;
  
  const newUser = await userService.create(first_name, last_name, email, password);
  
  if (!newUser) return res.status(400).json({ message: 'Já existe esse usuário' });
    
  res.status(201).json({ message: 'Usuário criado com sucesso' })
})

const update = rescue(async (req,res) => { 
  const _id = req.params.id;
  
  const {
    first_name,
    last_name,
    email,
    password
  } = req.body;
  
  const result = await userService.update(first_name, last_name, email, password, _id)
  
  if (!result) {
    res.status(200).json({ message: 'Dados inválidos!' });
  } else {
    res.status(200).json({ message: "Usuário editado com sucesso!" }); 
  }
})

const deleteUser = rescue(async (req, res) => {
  const{ id } = req.params;
  
  const done = await userService.deleteUser(id);
  
  console.log(done);
  
  if (!done) return res.status(404).json({ message: 'Usuário naão encontrado' });
  
  res.status(200).json({ message: 'Usuário deletado com sucesso' });
})

module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteUser,
}
