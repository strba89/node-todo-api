const { ObjectID }= require('mongodb');


const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// Todo.remove({}).then((results)=>{
//     console.log(results);
// });
//
// Todo.findOneAndRemove({_id:''}).then(()=>{
//
// });
//
// Todo.findByIdAndRemove('').then(()=>{
//
// });