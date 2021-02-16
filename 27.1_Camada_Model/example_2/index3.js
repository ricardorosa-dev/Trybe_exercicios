// Essa versão separa os middlewares da camada de modelo (authorsModel).
// MongoDB

const express = require('express');
const app = express();
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const authorsModel = require('./models/authorsModel');

app.use(bodyParser.json());

// GET ALL (READ)
app.get('/', rescue (async (req, res) => {
  const authors = await authorsModel.getAll()
  
  res.status(200).json(authors);
}));

// FIND BY :ID (READ)
app.get('/:id', rescue (async (req, res) => {
  const { id } = req.params;
  
  const author = await authorsModel.findById(id);
  
  if (!author) return res.status(404).json({ message: 'Autor não encontrado!' });
    
  res.status(200).json(author);
}));

// POST (CREATE)
app.post('/', rescue( async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    birthday,
    nationality
  } = req.body;
  
  const author = await authorsModel.create(first_name, middle_name, last_name, birthday, nationality);
    
  res.status(201).json(author);
}));

// MIDDLEWARE DE ERRO
app.use((err, req, res, next) => {
  console.log(err.message);
  
  res.status(500).json({ message: 'Erro interno!' });
})

const PORT = 3000;

app.listen(PORT, () => console.log('Listening...'));
