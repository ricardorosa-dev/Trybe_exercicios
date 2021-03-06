const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname, + '/envios'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback (null, 'envios/')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

// nomes de arquivo do próprio multer
const storage2 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback (null, 'uploads/')
  }
})

const upload = multer({ storage });

app.get('/ping', (req, res) => res.send('pong!'));

app.post('/envios', upload.single("arquivo"), (req, res) => {
  console.log(req.file)
  
  res.status(200).send('ok');
})

// receber vários arquivos
app.post('/envios-2', upload.array("uploadedImages",10), (req, res) => {
  const file = req.files;
  console.log(file);
  
  res.status(200).send('ok')
})

app.post('/criararquivo', async (req, res) => {
  fs.writeFile('./uploads/meuarquivo.txt', req.body.texto, function (err) {
    if (err) console.log(err)
  })
  res.status(200).send('ok');
})

// receber o nome de um arquivo e ler ele
app.get('/ler-arquivos', async (req, res) => {
  const { filename } = req.body
  
  const file = fs.readFileSync(`./uploads/${filename}.txt`, 'utf8', function (err, data) {
    if(err) console.log(err);
  })
  
  res.status(200).json({ 
    filename,
    content: file 
  });
});

// ler e baixar arquivos
app.get('/read-dir', async (req, res) => {
  const files = fs.readdir(__dirname +'/envios', 
    {withFileTypes: true},
    (err, files) => {
      console.log('The files:');
      if (err) console.log(err);
      const fileArray = [];
      files.forEach(file => fileArray.push('http://localhost:3000/envios/' + file.name))
      console.log(fileArray);
      // else files.forEach(file => console.log(file));
    }
  );
    
  return res.status(200).send('ok')
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening at ${PORT}...`))
