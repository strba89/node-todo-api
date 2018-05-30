const {ObjectID}= require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b05b0d82663b16b98f31750';
let userID = '5b02ec5e5775811a933b85e2';

if(!ObjectID.isValid(id)){
    console.log('ID not valid')
}

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos', todos)
// });
//
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo)
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Is not found')
//     }
//     console.log('Todo',todo)
// }).catch((e)=> console.log(e));


User.find({
    _id: userID
}).then((user)=>{
    if(!user){
        console.log('User is not found')
    }
    console.log('User', user)
}).catch((e)=> console.log(e));