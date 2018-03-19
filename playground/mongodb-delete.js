//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  db.collection('Todos').deleteMany({text:'Niet vergeten'}).then((result) => {
    console.log(result);
  });
    //delete one

  //findOneAndDelete


  //db.close();
});
