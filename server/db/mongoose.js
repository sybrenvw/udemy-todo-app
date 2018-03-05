var mongoose = require('mongoose');

//mongoose.Promise = require('bluebird');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.exports = {
//   mongoose: mongoose
// }
//ook te schrijven als
module.exports = {mongoose};
