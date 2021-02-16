const express = require('express');
const app = express();
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const userModel_mongo = require('./models/userModel_mongo');

app.use(bodyParser.json());

// Middleware de Erro
app.use((err, req, res, next) => {
  console.error(err.message);
  
  res.status(500).json({ message: 'Erro interno!' });
})

// CREATE (post)
app.post('/user', rescue(async (req, res) => {
  const {first_name, last_name, email, password} = req.body;
  
  const newUser = await userModel_mongo.create(first_name, last_name, email, password);
    
    res.status(201).json({ message: 'Usuário criado com sucesso' })
}))

// READ (get)
app.get('/user', rescue (async (req, res) => {
  const result = await userModel_mongo.getAll()
    
    res.status(200).json(result);
}))

// READ :ID (get) 
app.get('/user/:id', rescue (async (req, res) => {
  const _id = req.params.id;
  
  if (_id.length !== 24) return res.status(500).json({ message: 'Id inválido!'});
  
  const user = await userModel_mongo.findById(_id);
    
  if(!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    
  res.status(200).json(user);
}))

// UPDATE (put)
app.put('/user/:id', rescue(async (req,res) => { 
  const _id = req.params.id;
  
  if (_id.length !== 24) return res.status(500).json({ message: 'Id inválido!'});
  
  const {
    first_name,
    last_name,
    email,
    password
  } = req.body;
  
  const user = await userModel_mongo.findById(_id)
  
  if (!user) return res.status(404).json({ message: 'Usuário naão encontrado' });
  
  const result = await userModel_mongo.update(first_name, last_name, email, password, _id)
  
  // console.log(result);
  
  if (!result) {
    res.status(200).json({ message: 'Dados inválidos!' });
  } else {
    res.status(200).json({ message: "Usuário editado com sucesso!" }); 
  }
}))

// DELETE
app.delete('/user/:id', rescue(async (req, res) => {
  const{ id } = req.params;
  
  const user = await userModel_mongo.findById(id)
  
  if (!user) return res.status(404).json({ message: 'Usuário naão encontrado' });
  
  await userModel_mongo.userDelete(id);
  
  res.status(200).json({ message: 'Usuário deletado com sucesso' });
}))

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}...`));
