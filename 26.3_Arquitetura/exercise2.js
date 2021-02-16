const fs = require('fs');

function readMyFile(file1, file2) {
  const myFile1 = fs.readFile(file1, 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
  }) 
}

readMyFile('./gaijin.txt');
