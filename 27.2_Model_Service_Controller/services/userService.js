const userModel_mongo = require('../models/userModel_mongo');

const getAll = async () => await userModel_mongo.getAll();

const findById = async (id) => {
  let result, status;
  
  if (id.length !== 24) {
    status = 500;
    result = { message: 'Id inválido!'};
  }

  const user = await userModel_mongo.findById(id);
  
  if(!user) {
    status = 404;
    result = { message: 'Usuário não encontrado' };
  }
  
  console.log(user,status,result)
  return user, status, result;
}

const create = async (first_name, last_name, email, password) => {
  const existsUser = await userModel_mongo.findByName(first_name);
  
  if(existsUser) return false;
  
  const  user = await userModel_mongo.create(first_name, last_name, email, password);
  
  return user;
}

const update = async (first_name, last_name, email, password, id) => {
  if(typeof first_name !== 'string' || 
  typeof last_name !== 'string' || 
  typeof email !== 'string' || 
  email.includes('@') === false ||
  email.includes('.com') === false ||
  typeof password !== 'string') {
  return false;
  }
  
  if (id.length !== 24) return false;
  
  const existsUser = await userModel_mongo.findById(id);
  if(!existsUser) return false;
  
  await userModel_mongo.update(first_name, last_name, email, password, id);
  
  return true;
}

const deleteUser = async (id) => {
  const existsUser = await userModel_mongo.findById(id);
  
  if(!existsUser) return false;
  
  await userModel_mongo.userDelete(id);
  
  return true;
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteUser,
}
