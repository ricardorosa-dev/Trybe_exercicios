const fs = require('fs');

function readMyFile(file1, file2) {
  const fileStartTime = Date.now();
  
  const startTime = Date.now();
  const myFile = fs.readFileSync(file1, 'utf-8'); 
  const readingTime = Date.now() - startTime;
  const file1size = fs.statSync(file1).size / (1024*2014);
  
  const startTime2 = Date.now();
  const myFile2 = fs.readFileSync(file2, 'utf-8'); 
  const readingTime2 = Date.now() - startTime2;
  const file2size = fs.statSync(file2).size / (1024*1024); // Mb
  
  console.log(
    `File 1: ${readingTime} \nFile 2: ${readingTime2}`
  );
  console.log(
    `File 1 size: ${file1size.toFixed(1)} \nFile 2: ${file2size.toFixed(1)}`
  );
  
  const fileReadingTime = Date.now() - fileStartTime;
  console.log(`The total reading time for this script is ${fileReadingTime} milliseconds.`);
}

readMyFile('./gaijin.txt', 'mongo.txt');
