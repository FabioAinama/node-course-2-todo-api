const {MongoClient, ObjectID} = require('mongodb'); // Destructuring


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Impossible de se connecter à MongoDB Server');
    }
    console.log('Connecté à MongoDB Server');

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('593dc3c2c0e1f91a00f1d08a')
}, {
    $set: {
        completed: true
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    // db.close();
});