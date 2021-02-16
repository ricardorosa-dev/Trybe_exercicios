const { MongoClient } = require('mongodb');

const URI = 'mongodb://localhost:3000/';
const DB_NAME = 'model_example';

let connection = null;

module.exports = async function (collectionName) {
  connection =
    connection ||
    (await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));
    
  return connection.db(DB_NAME).collection(collectionName);
}
