const connection = require('./mongo_connection');
const {ObjectId} = require('mongodb')

const getAll = async() => {
  return await connection()
    .then((db) => db.collection('users').find().toArray());
}

const findById = async (id) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));
    
  if (!user) return null;
  
  return user;
}

const create = async (first_name, last_name, email, password) => {
  return await connection()
    .then((db) => db.collection('users')
    .insertOne({ first_name, last_name, email, password }));
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
  
  await connection()
    .then((db) => db.collection('users').updateOne(
      { _id: ObjectId(id)}, // Filter
      {$set: {
        first_name, 
        last_name, 
        email, 
        password,
      }},
      {upsert: false} // add document with req.body._id if not exists 
    ));
  
  return true;
}

const userDelete = async (id) => {
  await connection()
    .then((db) => db.collection('users').deleteOne(
      { _id: ObjectId(id) }
    ));
}


module.exports = {
  getAll,
  findById,
  create,
  update,
  userDelete,
}
