const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'model_example'
})

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors;')
  
  return authors;
}

const findById = async (id) => {
  const [[author]] = await connection
    .execute('SELECT * FROM authors WHERE id=?;', [id]);
    
    if (!author) return null;
    
    return author;
}

const create = async (first_name, middle_name, last_name, birthday, nationality) => {
  const [{insertId}] = await connection
    .execute('INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?)', [first_name, middle_name, last_name, birthday, nationality]);
    
    return {
      id: insertId,
      first_name,
      middle_name,
      last_name,
      birthday,
      nationality,
    }
}

module.exports = {
  getAll,
  findById,
  create,
}
