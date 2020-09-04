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

function verifyPair(obj, key, value) {
  if (obj[key] === value) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
