const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addMorningShift = (obj, key, value) => {
  obj[key] = value;
}

addMorningShift(lesson2, 'turno', 'manhã');

// Exercício 2
function listObjectKeys(obj) {
  console.log(Object.keys(obj));
}

// Exercício 3
function printObjectSize(obj) {
  console.log(Object.keys(obj).length);
}

//GABARITO
const sizeObj = (obj) => Object.keys(obj).length;
//console.log(sizeObj(lesson1));

// Exercício 4
function listObjectValues(obj) {
  console.log(Object.values(obj))
}

//Exercício 5
const allLessons = {}

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

//GABARITO
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// Exercício 6
function fullStudentNumber() {
  let studentNumber = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  console.log(studentNumber)
}

// GABARITO 6
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    let numeroArray = obj[array[i]].numeroAlunos;
    total += numeroArray;
  }
  console.log(total)
  return total;
}
console.log(getNumberOfStudents(allLessons));


// Exercício 7
// let getValueByNumber = (lesson, number) => {
//   console.log(Object.values(lesson)[number - 1]);
// }

// GABARITO 7
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);

getValueByNumber(lesson1, 0);

let verifyPair = (lesson, key, value) => {
  let keyTrue = false;
  let valueTrue = false;

  if (Object.keys(lesson).includes(key)) {
    keyTrue = true;
  }

  if (lesson[key] === value) {
    valueTrue = true;
  }

  if (keyTrue === true && valueTrue === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
