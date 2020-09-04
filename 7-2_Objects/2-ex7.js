// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

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

function getValueByNumber(obj, index) {
  let prop = Object.keys(obj)[index];
  return obj[prop];
}

console.log(getValueByNumber(lesson1, 0));
