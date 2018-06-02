const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


let password = 'q1w2e3r4t5';

// bcrypt.genSalt(10, (err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash)
//     })
// });

let hashedPassword = '$2a$10$sq57klvfoD4/nRU2TyrxPObcG49Le8u0fIA3U49Kc8fM/HQO1Fpkq';

bcrypt.compare(password,hashedPassword, (err,res)=>{
        console.log(res);
});




// let message = 'I am  user number 3';
//
// let hash = SHA256(message).toString();
//
// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);
//
//
// let data = {
//   id: 4
// };
//
// let token = {
//   data,
//     hash:SHA256(JSON.stringify(data) + 'someSecret' ).toString()
// };
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'someSecret' ).toString();
//
// if (resultHash === token.hash){
//     console.log('Data was not changed')
// }else {
//     console.log('Data was changed. Do not trust!!')
// }