const student1 = {
  HTML: 'Ótimo',
  CSS: 'Bom',
  JavaScript: 'Médio',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

let showSkills = object => {
  let arraySkills = Object.keys(student1);

  for (let i in arraySkills) {
    console.log(`${arraySkills[i]}, Nível: ${student1[arraySkills[i]]}`);
  }
}

// showSkills();

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
