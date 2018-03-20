const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab12fa7e69554905144f00511';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo by id', todo);
// }).catch((e) => console.log(e));
var id = '5a9bcda81e2dbc605f55c058';

if (!ObjectID.isValid(id)) {
  console.log('Dit is niet een kloppend id.')
};

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Die is er niet');
  }
  console.log(user.email);
}, (e) => {
  console.log(e);
});
