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


const allLessons = Object.assign({ lesson1 }, { lesson2 }, { lesson3 });

function studentsInMathClass(classe, ...objs) {
  let studentNumber = 0;
  for (let i = 0; i < objs.length; i += 1) {
    if (objs[i].materia === classe) {
      studentNumber += objs[i].numeroEstudantes;
    }
  }
  console.log(`A quantidade de alunos nas aulas de ${classe} é de ${studentNumber}.`);
  return studentNumber;
}

console.log(studentsInMathClass('Matemática', lesson1, lesson2, lesson3));
