const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroAlunos: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },
  lesson2: {
    materia: 'História',
    numeroAlunos: 20,
    professor: 'Carlos',
  },
  lesson3: {
    materia: 'Matemática',
    numeroAlunos: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
}


const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroAlunos;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));
