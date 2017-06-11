const {MongoClient, ObjectID} = require('mongodb'); // Destructuring


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Impossible de se connecter à MongoDB Server');
    }
    console.log('Connecté à MongoDB Server');

    // deleteMany
    db.collection('Todos').deleteMany({text: 'Yolo1'}).then((result) => {
        console.log(result);
    });

    // deleteOne
    db.collection('Todos').deleteOne({text: 'Yolo2'}).then((result) => {
        console.log(result);
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Nouveau :)'}).then((res) => {
        console.log(res);
    });

    // db.close();
});