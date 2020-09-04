const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return userFullName(userToReturn);
};

console.log(getUser());

// assert.equal(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.equal(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser
