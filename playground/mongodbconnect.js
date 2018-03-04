//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp())

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

//insert new doc into USers (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Skatta',
  //   age: 1,
  //   location: 'Pijnacker'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('User not added.')
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
