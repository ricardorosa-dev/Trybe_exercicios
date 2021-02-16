const express = require('express');
const app = express();
const port = 3000;

usernames = [
  {id: 1, name: "Joao"},
]

message = { message: "Pong!" };

app.get('/ping', (req, res) => {
  res.send(message);
})

app.post('/hello', (req, res) => {
  const user = {
    id: usernames.length + 1,
    name: req.body.name,
  };
  
  usernames.push(user);
  res.send({ message: `Hello, ${user.name}`});
  
})

app.listen(port, () => {
  console.log("Listening");
})
