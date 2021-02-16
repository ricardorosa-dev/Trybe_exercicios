var inquirer = require('inquirer');

inquirer.prompt([
  {
    name: "n",
    type: "input",
    message: "Digite o valor de n: ",
    validate: (value) => {
      if (isNaN(value)) {
        return console.log("Please insert a number.");
      }
      if (value <= 1) {
        return console.log("Please insert a number above 1");
      }
      return true;
    }
  }
])
  .then(answer => {
    function factorial (answer) {
      let number = 1;
      for (let i = 1; i <= answer; i += 1 ) {
        number *= i;
      }
      
      return number;
    }
    const fact = factorial(answer.n);
    
    console.log(answer)
    console.log(`The factorial of the number ${answer.n} is: ${fact}`)
  })
  .catch(error => {
    console.log(error);
  })  
