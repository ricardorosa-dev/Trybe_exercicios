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

function createReport(obj, teacher) {
  teacherObj = {
  }
  Object.keys(obj).forEach(test => {
    if (obj[test].professor === teacher) {
      teacherObj.professor = teacher;
      teacherObj.aulas = obj[test].materia;
      
    }
  })
}

console.log(createReport(allLessons, 'Maria Clara'));
