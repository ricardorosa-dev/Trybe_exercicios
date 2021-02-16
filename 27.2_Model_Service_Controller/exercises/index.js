const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./MSC/controller');

app.use(bodyParser.json());

app.use((err, req, res, netx) => {
  console.error(err.message);
  
  res.status(500).json({ message: 'Erro interno!' });
})

// GET
app.get('/', controller.getAll);

// FIND BY CEP
app.get('/lookup', controller.findByCep);

//POST
app.post('/', controller.create);

const PORT = 3000;
app.listen(PORT, () => console.log('Listening...'));

