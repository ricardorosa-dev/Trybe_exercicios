// Essa versão está com tudo aqui no index.js
// A versão index2.js separa os middlewares (no index), que fazem somente as requisições, da camada de modelo (no authorModel), que tem acesso ao banco de dados.

const express = require('express');
const app = express();
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

app.use(bodyParser.json());

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'model_example'
})

// GET ALL (READ)
app.get('/', rescue (async (req, res) => {
  const [authors] = await connection.execute('SELECT * FROM authors;')
  
  res.status(200).json(authors);
}));

// FIND BY :ID (READ)
app.get('/:id', rescue (async (req, res) => {
  const { id } = req.params;
  const [[author]] = await connection
    .execute('SELECT * FROM authors WHERE id=?;', [id]);
    
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
  
  const [{insertId}] = await connection
    .execute('INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?)', [first_name, middle_name, last_name, birthday, nationality]);
    
    res.status(201).json({
      id: insertId,
      first_name,
      middle_name,
      last_name,
      birthday,
      nationality,
    });
}));

// MIDDLEWARE DE ERRO
app.use((err, req, res, next) => {
  console.log(err.message);
  
  res.status(500).json({ message: 'Erro interno!' });
})

const PORT = 3000;

app.listen(PORT, () => console.log('Listening...'));
