const {MongoClient, ObjectID}= require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5afed5e34ab32a236e44a91b')
   },{
       $set: {
           name: 'Nikola'
       },
       $inc: { age: 7 }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result)
   });

    client.close();
});