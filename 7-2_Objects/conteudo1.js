const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',

}

let key = 'Profession';
let value = 'Carpenter';

//console.log(customer1);

customer1.lastName = 'Faria';
customer1['fullName'] = `${customer1.firstName} ${customer1.lastName}`;



customer1[key] = value;

console.log(customer1);
