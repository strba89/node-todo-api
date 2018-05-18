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

    // db.collection('Todos').find({
    //     _id: new ObjectID("5afec8cd079fbb1f18a9deeb")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log(`Unable to fetch todos ${err}`)
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log(`Unable to fetch todos ${err}`)
    // });
    db.collection('Users').find({
        name: 'Milos'
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log(`Unable to fetch todos ${err}`)
    });
    client.close();
});