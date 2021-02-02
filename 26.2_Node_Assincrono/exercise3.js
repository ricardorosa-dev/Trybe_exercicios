// import rl from 'readline';
const rl = require('readline');
const fs = require('fs');

const prompt = rl.createInterface(process.stdin, process.stdout);

prompt.question("Qual arquivo deseja ler? ", (answer) => {
  fs.readFile(answer, 'utf-8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    console.log(file, file.byte);
    process.exit(1);
  });
  })
