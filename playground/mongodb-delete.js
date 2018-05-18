const {MongoClient}= require('mongodb');
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
    //deleteMany

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch',
    // }).then((result)=>{console.log(result)});


    //deleteOne

    // db.collection('Todos').deleteOne({
    //         text: 'Eat lunch',
    // }).then((result)=>{console.log(result)});

    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({
        completed: true,
    }).then((result)=>{console.log(result)});

    client.close();
});