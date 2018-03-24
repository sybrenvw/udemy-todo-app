var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongodb://<dbuser>:<dbpassword>@ds052968.mlab.com:52968/udemy-todo-app
var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = process.env.MONGOLAB_URI; //"mongodb://udemy:tAAsjzdc@ds052968.mlab.com:52968/udemy-todo-app";

 options= {
     auth: {
         user: 'udemy',
         password: 'tAAsjzdc'
     }
 }
}else{
 connectPath = "mongodb://localhost:27017/TodoApp";
 options = {}
}
mongoose.connect(connectPath, options);
//mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
