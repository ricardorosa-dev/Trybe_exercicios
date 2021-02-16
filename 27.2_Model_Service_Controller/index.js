const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

// Middleware de Erro
app.use((err, req, res, next) => {
  console.error(err.message);
  
  res.status(500).json({ message: 'Erro interno!' });
})

// READ (get)
app.get('/user', userController.getAll);

// READ :ID (get) 
app.get('/user/:id', userController.findById);

// CREATE (post)
app.post('/user', userController.create);

// UPDATE (put)
app.put('/user/:id', userController.update);

// DELETE
app.delete('/user/:id', userController.deleteUser);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}...`));
