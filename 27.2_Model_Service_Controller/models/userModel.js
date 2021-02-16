const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'users_crud',
})

const getAll = async() => {
  const [result] = await connection
    .execute('SELECT * FROM users;');
    
    return result;
}

const findById = async (id) => {
  const [[user]] = await connection
    .execute('SELECT * FROM users WHERE id=?;', [id]);
    
  if (!user) return null;
    
  return user;
}

const create = async (first_name, last_name, email, password) => {
  const [{insertId}] = await connection
    .execute('INSERT INTO users(first_name, last_name, email, password) VALUES(?, ?, ?, ?)', [first_name, last_name, email, password]);
  
  return {
    id: insertId,
    first_name,
    last_name,
    email,
    password
  }
}

const checkUser = async (id) => {
  const [[user]] = await connection
  .execute('SELECT * FROM users WHERE id=?;', [id]);
  
  if (!user) return null;
  
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
  
  await connection
  .execute('UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?;', [first_name, last_name, email, password, id]);
  
  return true;
}

const userDelete = async (id) => {
  await connection.execute('DELETE FROM users WHERE id=?;', [id]);
}

module.exports = {
  getAll,
  findById,
  create,
  checkUser,
  update,
  userDelete,
}
